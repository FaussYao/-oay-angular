import { ValidatorFn } from '@angular/forms';

export interface FieldConfig {
  type: string;
  name: string;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  option?: any[];
  value?: any;
  validation?: ValidatorFn[];
}
