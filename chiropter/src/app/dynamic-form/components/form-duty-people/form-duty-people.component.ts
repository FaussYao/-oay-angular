import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';


@Component({
  selector: 'app-form-duty-people',
  templateUrl: './form-duty-people.component.html',
  styleUrls: ['./form-duty-people.component.scss']
})
export class FormDutyPeopleComponent implements Field {
  config: FieldConfig;
  group: FormGroup;

}
