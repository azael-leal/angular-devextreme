import { NgModule } from '@angular/core';
import { DynamicsRoutingModule } from './dynamics-routing.module';

// Modules
import { SharedModule } from '@shared';
import { DevextremeModule } from '@shared/devextreme';

// Components
import { DynamicsComponent } from './pages/dynamics.component';

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
