import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  IFormSettings,
  DynamicFormBuilder
} from 'projects/ngx-dynamic-formbuilder/src/public-api';
// import { DynamicFormBuilder, IFormSettings } from './dyn-form-builder.class';

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
    title: [
      '',
      [Validators.required],
      { type: 'text', errormsg: { required: 'Title is required!' } }
    ],
    subtitle: ['', []],
    isbn: ['', []],
    abstract: ['', []],
    numPages: [0, []],
    author: ['', []],
    publisher: {
      name: ['', []],
      url: ['', []],
      address: {
        street: [''],
        city: [''],
        zip: ['']
      }
    }
  };
  constructor(private builder: DynamicFormBuilder) {
    this.myForm = builder.setupForm(this.settings);
    this.dynKeys = Object.keys(this.myForm.controls);
  }
}
