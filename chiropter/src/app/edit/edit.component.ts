import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { FieldConfig } from '../dynamic-form/models/field-config.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, AfterViewInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  config: FieldConfig[] = [
    {
      type: 'input',
      label: '用户名',
      name: 'name',
      placeholder: '请输入你的用户名',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      label: '提交',
      name: 'submit',
      type: 'button'
    }
  ];

  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    setTimeout(() => {
      this.form.setValue('name', 'charblus');
    }, 1);

  }

  submit(value: { [name: string]: any }) {
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
