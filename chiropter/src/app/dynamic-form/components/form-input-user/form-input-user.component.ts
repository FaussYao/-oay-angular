import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'app-form-input-user',
  templateUrl: './form-input-user.component.html',
  styleUrls: ['./form-input-user.component.scss']
})
export class FormInputUserComponent implements Field {
  config: FieldConfig;
  group: FormGroup;


}
