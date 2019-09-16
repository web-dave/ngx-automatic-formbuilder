import { ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { IExtFormControlSettings } from './FormControlSettings.interface';

export interface IFormSettings {
  [key: string]:
    | [any, ValidatorFn[]?, AsyncValidatorFn[]?, IExtFormControlSettings?]
    | IFormSettings;
}
