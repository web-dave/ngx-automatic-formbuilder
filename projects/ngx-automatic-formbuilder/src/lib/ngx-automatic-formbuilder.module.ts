import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AutomaticFormBuilder } from './ngx-automatic-formbuilder.service';

@NgModule({
  declarations: [],
  imports: [ReactiveFormsModule],
  providers: [AutomaticFormBuilder],
  exports: [ReactiveFormsModule]
})
export class AutomaticFormbuilderModule {}
