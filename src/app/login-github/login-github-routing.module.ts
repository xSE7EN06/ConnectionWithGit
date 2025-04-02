import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGithubPage } from './login-github.page';

const routes: Routes = [
  {
    path: '',
    component: LoginGithubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginGithubPageRoutingModule {}
