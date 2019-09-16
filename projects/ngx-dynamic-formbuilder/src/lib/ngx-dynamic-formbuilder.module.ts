import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxDynamicFormbuilderComponent } from './ngx-dynamic-formbuilder.component';
import { DynamicFormBuilder } from './ngx-dynamic-formbuilder.service';

@NgModule({
  declarations: [NgxDynamicFormbuilderComponent],
  imports: [ReactiveFormsModule],
  providers: [DynamicFormBuilder],
  exports: [NgxDynamicFormbuilderComponent, ReactiveFormsModule]
})
export class NgxDynamicFormbuilderModule {}
