import { AbstractControl, FormControl } from '@angular/forms';

export interface IExtFormControl extends FormControl {
  errormsg: {
    [key: string]: string;
  };
  type: string;
  label: string;
}
