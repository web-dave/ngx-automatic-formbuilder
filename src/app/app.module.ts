import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AutomaticFormbuilderModule } from 'projects/ngx-automatic-formbuilder/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AutomaticFormbuilderModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
