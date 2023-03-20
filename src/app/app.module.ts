import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngJson2excelBtnModule } from 'ang-json2excel-btn';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngJson2excelBtnModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
