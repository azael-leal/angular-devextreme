import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// DevExtreme Modules
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';

// Components
import { DynamicsComponent } from './pages/dynamics/dynamics.component';

const routes: Routes = [
  {
    path: 'dynamics',
    component: DynamicsComponent,
  },
  {
    path: 'app',
    loadChildren: () => import('./modules/dynamics/dynamics.module').then(m => m.DynamicsModule)
  },
  {
    path: '**',
    redirectTo: 'app'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule],
  providers: [],
  exports: [RouterModule],
})
export class AppRoutingModule { }
