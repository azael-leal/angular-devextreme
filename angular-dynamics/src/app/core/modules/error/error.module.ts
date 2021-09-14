import { NgModule } from '@angular/core';
import { ErrorRoutingModule } from './error-routing.module';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NotAuthorizedComponent } from './pages/not-authorized/not-authorized.component';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    NotAuthorizedComponent
  ],
  imports: [
    ErrorRoutingModule
  ]
})
export class ErrorModule { }
