import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'app-form-input-remember',
  templateUrl: './form-input-remember.component.html',
  styleUrls: ['./form-input-remember.component.scss']
})
export class FormInputRememberComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
