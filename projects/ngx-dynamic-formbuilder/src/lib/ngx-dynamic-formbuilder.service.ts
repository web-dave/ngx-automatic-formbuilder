import {
  FormBuilder,
  ValidatorFn,
  AbstractControlOptions,
  AsyncValidatorFn,
  FormControl,
  FormArray,
  FormGroup,
  AbstractControl
} from '@angular/forms';
import { Injectable } from '@angular/core';
import { IFormSettings, IFormControlSettings } from './models';
import { IExtFormControl } from './models/ExtendedFormControl.interface';

@Injectable()
export class DynamicFormBuilder {
  array: (
    controlsConfig: any[],
    validatorOrOpts?:
      | ValidatorFn
      | ValidatorFn[]
      | AbstractControlOptions
      | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) => FormArray;
  control: (
    formState: any,
    validatorOrOpts?:
      | ValidatorFn
      | ValidatorFn[]
      | AbstractControlOptions
      | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) => FormControl;
  group: (
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

  constructor(formbuilder: FormBuilder) {
    this.group = formbuilder.group;
    this.control = formbuilder.control;
    this.array = formbuilder.array;
  }

  setupForm(options: IFormSettings): FormGroup {
    let formGroup: FormGroup;
    if (this.isObject(options)) {
      formGroup = this.group({});
      this.setupGroup(formGroup, options);
    }
    return formGroup;
  }

  setupGroup(form: FormGroup, options: IFormSettings) {
    for (const opt in options) {
      if (Array.isArray(options[opt])) {
        let validate = false;
        if (Array.isArray(options[opt][1])) {
          validate = true;
        }
        const ctrl = new FormControl(
          options[opt][0],
          validate ? options[opt][1] : null
        ) as IExtFormControl;
        if (this.isObject(options[opt][2])) {
          const ext: IFormControlSettings = options[
            opt
          ][2] as IFormControlSettings;
          ctrl.errormsg = ext.errormsg;
          ctrl.type = ext.type;
          ctrl.label = ext.label;
        }
        form.addControl(opt, ctrl);
      } else {
        if (this.isObject(options[opt])) {
          const subG = this.group({});
          form.addControl(opt, subG);
          this.setupGroup(
            form.get(opt) as FormGroup,
            options[opt] as IFormSettings
          );
        }
      }
    }
  }

  isObject(value: any): boolean {
    return (
      typeof value === 'object' && value !== null && value.length === undefined
    );
  }

  isValidValue(val: any): boolean {
    return (
      typeof val === 'string' ||
      typeof val === 'number' ||
      typeof val === 'boolean'
    );
  }

  _reduceControls(controlsConfig: {
    [k: string]: any;
  }): { [key: string]: AbstractControl } {
    const controls: { [key: string]: AbstractControl } = {};
    Object.keys(controlsConfig).forEach(controlName => {
      controls[controlName] = this._createControl(controlsConfig[controlName]);
    });
    return controls;
  }

  _createControl(controlConfig: any): AbstractControl {
    if (
      controlConfig instanceof FormControl ||
      controlConfig instanceof FormGroup ||
      controlConfig instanceof FormArray
    ) {
      return controlConfig;
    } else if (Array.isArray(controlConfig)) {
      const value = controlConfig[0];
      const validator: ValidatorFn =
        controlConfig.length > 1 ? controlConfig[1] : null;
      const asyncValidator: AsyncValidatorFn =
        controlConfig.length > 2 ? controlConfig[2] : null;
      return this.control(value, validator, asyncValidator);
    } else {
      return this.control(controlConfig);
    }
  }
}
