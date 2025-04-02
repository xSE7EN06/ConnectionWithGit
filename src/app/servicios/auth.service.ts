import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Browser } from '@capacitor/browser';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { AlertController, Platform } from '@ionic/angular';
import { isPlatform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private clientId = 'Ov23li2B4QDyn3VTvPTS';
  private redirectUri = 'io.ionic.starter://login-github';
  user: any;


  constructor(private route: ActivatedRoute, private router: Router, private alertController: AlertController
    , private platform:Platform
  ) {
    if(!isPlatform('capacitor')){
      GoogleAuth.initialize();
    }
    this.platform.ready().then(() => {
      GoogleAuth.initialize();
    })
   }

  async loginWithGithub(){
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&scope=user`;
    const response = await Browser.open({ url: githubAuthUrl});
    if(response != null || response != undefined){
      this.checkAuthCallback();
    }
  }

  async checkAuthCallback() {
    this.route.queryParams.subscribe(async params => {
      if (params['code']) {
        console.log('Código recibido:', params['code']);
  
        // Mostrar alerta de éxito con Ionic
        const alert = await this.alertController.create({
          header: 'Inicio de sesión',
          message: `✅ Código recibido: ${params['code']}`,
          buttons: ['OK']
        });
        await alert.present();
  
        // Redirigir a la página de login
        this.router.navigate(['/login-github']);
      } else {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'No se recibió el código de autenticación.',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }


  async googleSignIn() {
    let googleUser = await GoogleAuth.signIn();
    const credential = firebase.auth.GoogleAuthProvider.credential(googleUser.authentication.idToken);
    return firebase.auth().signInWithCredential(credential);
  }
}
