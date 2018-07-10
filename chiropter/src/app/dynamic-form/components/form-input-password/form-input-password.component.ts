import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'app-form-input-password',
  templateUrl: './form-input-password.component.html',
  styleUrls: ['./form-input-password.component.scss']
})
export class FormInputPasswordComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
