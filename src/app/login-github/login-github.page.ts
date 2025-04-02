import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-login-github',
  templateUrl: './login-github.page.html',
  styleUrls: ['./login-github.page.scss'],
  standalone: false
})
export class LoginGithubPage {
  constructor(private authService: AuthService) {}
  login() {
    this.authService.loginWithGithub();
  }
}
