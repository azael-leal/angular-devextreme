import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { AppLayoutComponent } from './pages/app-layout/app-layout.component';

@NgModule({
  declarations: [
    AppLayoutComponent,
  ],
  imports: [
    SharedModule,
    AppLayoutRoutingModule,
  ]
})
export class AppLayoutModule { }
