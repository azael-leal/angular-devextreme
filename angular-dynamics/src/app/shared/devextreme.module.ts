import { NgModule } from '@angular/core';

import { DxDataGridModule } from 'devextreme-angular';

@NgModule({
  imports: [
    DxDataGridModule,
  ],
  exports: [
    DxDataGridModule
  ]
})
export class DevextremeModule { }
