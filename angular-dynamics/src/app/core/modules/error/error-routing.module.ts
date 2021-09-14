import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NotAuthorizedComponent } from './pages/not-authorized/not-authorized.component';

const routes: Routes = [
  { path: '', redirectTo: 'page-not-found', pathMatch: 'full' },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'not-authorized', component: NotAuthorizedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
