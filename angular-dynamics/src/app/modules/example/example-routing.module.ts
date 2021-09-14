import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { ExampleComponent } from './pages/example/example.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: ExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }
