import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginGithubPageRoutingModule } from './login-github-routing.module';

import { LoginGithubPage } from './login-github.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginGithubPageRoutingModule
  ],
  declarations: [LoginGithubPage]
})
export class LoginGithubPageModule {}
