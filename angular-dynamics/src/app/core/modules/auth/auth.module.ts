import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedComponentsModule } from '@shared/components';
import { AngularMaterialModule } from '@shared/angular-material';

import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule,
    AngularMaterialModule,
    SharedComponentsModule
  ],
  providers: []
})
export class AuthModule { }
