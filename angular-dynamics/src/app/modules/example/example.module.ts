import { ExampleRoutingModule } from './example-routing.module';
import { NgModule } from '@angular/core';

// Mcdules
import { SharedModule } from '@shared';
import { DevextremeModule } from '@shared/devextreme';

// Components
import { ExampleComponent } from './pages/example/example.component';

@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    ExampleRoutingModule,
    SharedModule,
    DevextremeModule
  ]
})
export class ExampleModule { }
