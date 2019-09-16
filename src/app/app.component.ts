import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { AutomaticFormBuilder, IFormSettings } from 'ngx-automatic-formbuilder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formbuilder';
  myForm: FormGroup;
  dynKeys;
  settings: IFormSettings = {
    user: [
      '',
      [Validators.required],
      [],
      { type: 'number', errormsg: { required: 'User is required!' } }
    ],
    company: {
      name: ['', []],
      url: ['', []],
      address: {
        street: [''],
        city: [''],
        zip: ['']
      }
    }
  };
  constructor(builder: AutomaticFormBuilder) {
    this.myForm = builder.setupForm(this.settings);
    console.log(this.myForm);
    this.dynKeys = Object.keys(this.myForm.controls);
  }
}
