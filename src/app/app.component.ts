import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import {
  IFormSettings,
  AutomaticFormBuilder
} from 'projects/ngx-automatic-formbuilder/src/public-api';

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
      [],
      { type: 'number', errormsg: { required: 'Title is required!' } }
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
  constructor(builder: AutomaticFormBuilder) {
    this.myForm = builder.setupForm(this.settings);
    console.log(this.myForm);
    this.dynKeys = Object.keys(this.myForm.controls);
  }
}
