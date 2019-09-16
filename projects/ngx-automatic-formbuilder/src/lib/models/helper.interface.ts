import {
  ValidatorFn,
  AbstractControlOptions,
  AsyncValidatorFn,
  FormArray,
  FormControl,
  FormGroup
} from '@angular/forms';

export type IFormArrayFn = (
  controlsConfig: any[],
  validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
  asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
) => FormArray;

export type IFormControlFn = (
  formState: any,
  validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
  asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
) => FormControl;
export type IFormGroupFn = (
  controlsConfig: {
    [key: string]: any;
  },
  options?:
    | AbstractControlOptions
    | {
        [key: string]: any;
      }
    | null
) => FormGroup;
