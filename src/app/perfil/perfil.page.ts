import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false
})
export class PerfilPage {

  profileImage: string = 'https://ionicframework.com/docs/img/demos/avatar.svg';  

  constructor() { }

  async takePhoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Prompt,
      });
  
      console.log('Base64 Image:', image.base64String); // 👀 Verifica la salida en la consola
  
      if (image.base64String) {
        this.profileImage = `data:image/jpeg;base64,${image.base64String}`;
      }
    } catch (error) {
      console.error('Error al tomar la foto:', error);
      alert('No se pudo acceder a la cámara o la acción fue cancelada.');
    }
  }
}
