import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'app-form-type-radio',
  templateUrl: './form-type-radio.component.html',
  styleUrls: ['./form-type-radio.component.scss']
})
export class FormTypeRadioComponent implements Field {
  config: FieldConfig;
  group: FormGroup;

  private taskTypeFlag: number = 0;

  constructor() {}

  optionFunc(i: number) {
    this.taskTypeFlag = i;
  }
}
