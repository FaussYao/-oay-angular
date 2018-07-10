import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'app-form-deadline',
  templateUrl: './form-deadline.component.html',
  styleUrls: ['./form-deadline.component.scss']
})
export class FormDeadlineComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
  private hour: string[] = [];
  private minute: string[] = [];

  constructor() {
    for (let i = 0; i < 25; i++) {
      if (i < 10) {
        this.hour[i] = '0' + i;
      } else {
        this.hour[i] = i + '';
      }
    }
    for (let i = 0; i < 61; i++) {
      if (i > 10) {
        this.minute[i] = i + '';
      } else {
        this.minute[i] = '0' + i;
      }
    }
  }
}
