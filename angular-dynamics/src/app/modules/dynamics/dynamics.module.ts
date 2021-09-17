import { DynamicsRoutingModule } from './dynamics-routing.module';
import { NgModule } from '@angular/core';

// Modules
import { SharedModule } from '../../shared/shared.module';
import { DevextremeModule } from '../../shared/devextreme.module';

// Components
import { DynamicsComponent } from '../dynamics/pages/dynamics.component';

@NgModule({
  declarations: [
    DynamicsComponent
  ],
  imports: [
    DynamicsRoutingModule,
    SharedModule,
    DevextremeModule
  ]
})
export class DynamicsModule { }
