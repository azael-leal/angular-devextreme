import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { DynamicsComponent } from './pages/dynamics.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: DynamicsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicsRoutingModule {}
