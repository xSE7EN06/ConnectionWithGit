import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-google',
  templateUrl: './login-google.page.html',
  styleUrls: ['./login-google.page.scss'],
  standalone: false
})
export class LoginGooglePage implements OnInit {

  user:any;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async login(){
    this.authService.googleSignIn().then(user => {
      console.log('Usuario autenticado:', user);
    }).catch(error => {
      console.error('Error en login:', error);
    });

  }

}
