import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxDynamicFormbuilderModule } from 'projects/ngx-dynamic-formbuilder/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxDynamicFormbuilderModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
