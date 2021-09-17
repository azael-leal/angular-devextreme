import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Resolvers
import { DynamicsResolver } from './resolvers';

// Components
import { DynamicsComponent } from './pages/dynamics.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: DynamicsComponent,
    resolve: { products: DynamicsResolver },
    data: { title: 'Dynamics' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicsRoutingModule { }
