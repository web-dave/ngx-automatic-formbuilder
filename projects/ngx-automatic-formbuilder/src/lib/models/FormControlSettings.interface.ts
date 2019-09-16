import { IFormControlErrorMsg } from './FormControlErrorMsg.interface';

export interface IExtFormControlSettings {
  type: string;
  label?: string;
  errormsg?: IFormControlErrorMsg;
}
