import { ValidatorFn } from '@angular/forms';
import { IFormControlSettings } from './FormControlSettings.interface';

export interface IFormSettings {
  [key: string]: [any, ValidatorFn[]?, IFormControlSettings?] | IFormSettings;
}
