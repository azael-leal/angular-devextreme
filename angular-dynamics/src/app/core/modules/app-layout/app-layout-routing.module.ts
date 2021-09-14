import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guards
import { AuthGuard } from '@core/guards';

// Components
import { AppLayoutComponent } from './pages/app-layout/app-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'example', pathMatch: 'full' },
  {
    path: '',
    component: AppLayoutComponent,
    // canActivate: [AuthGuard], canActivateChild: [AuthGuard],
    children: [
      {
        path: 'example',
        data: { breadcrumb: 'Example' },
        loadChildren: () => import('../../../modules/example/example.module').then(m => m.ExampleModule)
      },
      {
        path: 'dynamics',
        data: { breadcrumb: 'Dynamics' },
        loadChildren: () => import('../../../modules/dynamics/dynamics.module').then(m => m.DynamicsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
