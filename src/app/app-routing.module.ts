import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'code-qr-brrs',
    loadChildren: () => import('./code-qr-brrs/code-qr-brrs.module').then( m => m.CodeQrBrrsPageModule)
  },
  {
    path: 'login-github',
    loadChildren: () => import('./login-github/login-github.module').then( m => m.LoginGithubPageModule)
  },
  {
    path: 'login-google',
    loadChildren: () => import('./login-google/login-google.module').then( m => m.LoginGooglePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
