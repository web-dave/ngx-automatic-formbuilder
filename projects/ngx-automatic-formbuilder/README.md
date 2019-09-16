# NgxAutomaticFormbuilder

This is a Extended FormBuilder.
You can Pass in a Config object and it generates a FormGroup.

## How to install

tbd.

## How to use

The config object looks similar to the FormBuilder config

### IFormSettings

```ts
export interface IFormSettings {
  [key: string]:
    | [any, ValidatorFn[]?, AsyncValidatorFn[]?, IExtFormControlSettings?]
    | IFormSettings;
}
```

It can Handle SubGroups as well.

In my example i us this:

### FormSettings

```json
settings: IFormSettings = {
    user: [
      '',
      [Validators.required],
      [],
      { type: 'text', errormsg: { required: 'User is required!' } }
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
```

You can add the highly needed information to each FormControl to autogenerate the form in your template.

### IExtFormControl

```ts
export interface IExtFormControl extends FormControl {
  errormsg: {
    [key: string]: string;
  };
  type: string;
  label: string;
}
```

And in your template you can use this like this

### Template use

```html
<form [formGroup]="myForm">
  <div class="form-group" *ngFor="let itm of dynKeys">
    <div *ngIf="!myForm.get(itm).controls">
      <label [for]="itm">{{ itm }}</label>
      <input
        [type]="myForm.get(itm)?.type"
        [id]="itm"
        [formControlName]="itm"
      />
      <div [hidden]="!myForm.get(itm).hasError('required')">
        {{ myForm.get(itm).errormsg?.required }}
      </div>
    </div>
  </div>
</form>
```

Maybe this is helpfull in some way.

I know there are no tests at all.

I will add them by time.

# contribution is very wellcome!
