import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ScanditSdkModule } from "scandit-sdk-angular";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ScanditSdkModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }