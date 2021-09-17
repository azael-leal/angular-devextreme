import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';

// Modules
import { DxDataGridModule } from 'devextreme-angular';

// Components
import { AppComponent } from './app.component';
import { DynamicsComponent } from './pages/dynamics/dynamics.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DxDataGridModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
