import { NgModule } from '@angular/core';

import { DxDataGridModule, DxFormModule } from 'devextreme-angular';

const components: any[] = [
  DxDataGridModule,
  DxFormModule
]

@NgModule({
  declarations: [],
  imports: [components],
  exports: [components]
})
export class DevextremeModule { }
