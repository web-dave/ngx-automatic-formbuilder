import { IFormControlErrorMsg } from './FormControlErrorMsg.interface';

export interface IFormControlSettings {
  type: string;
  label?: string;
  errormsg?: IFormControlErrorMsg;
}
