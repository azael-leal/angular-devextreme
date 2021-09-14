import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./core/modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./core/modules/app-layout/app-layout.module').then(m => m.AppLayoutModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./core/modules/error/error.module').then(m => m.ErrorModule)
  },
  {
    loadChildren: () => import('./core/modules/error/error.module').then(m => m.ErrorModule)
  },
  { path: '**', redirectTo: 'error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
