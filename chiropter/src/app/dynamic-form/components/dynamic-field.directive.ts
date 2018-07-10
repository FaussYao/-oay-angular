import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormButtonComponent } from './form-button/form-button.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormTypeRadioComponent } from './form-type-radio/form-type-radio.component';
import { FormDutyPeopleComponent } from './form-duty-people/form-duty-people.component';
import { FormSelectTwoComponent } from './form-select-two/form-select-two.component';
import { FormImgUplodaComponent } from './form-img-uploda/form-img-uploda.component';
import { FormDeadlineComponent } from './form-deadline/form-deadline.component';
import { FormTextareaComponent } from './form-textarea/form-textarea.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { FormInputUserComponent } from './form-input-user/form-input-user.component';
import { FormInputPasswordComponent } from './form-input-password/form-input-password.component';
import { FormInputRememberComponent } from './form-input-remember/form-input-remember.component';

import { Field } from '../models/field.interface';
import { FieldConfig } from '../models/field-config.interface';

const components: { [type: string]: Type<Field> } = {
  button: FormButtonComponent,
  input: FormInputComponent,
  select: FormSelectComponent,
  typeRadio: FormTypeRadioComponent,
  dutyPeople: FormDutyPeopleComponent,
  selectTwo: FormSelectTwoComponent,
  imgUploda: FormImgUplodaComponent,
  deadline: FormDeadlineComponent,
  textarea: FormTextareaComponent,
  checkout: FormCheckboxComponent,
  inputUser: FormInputUserComponent,
  inputPass: FormInputPasswordComponent,
  inputRemember: FormInputRememberComponent
};

@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements Field, OnChanges, OnInit {
  @Input()
  config: FieldConfig;

  @Input()
  group: FormGroup;

  component: ComponentRef<Field>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }

  ngOnInit() {
    if (!components[this.config.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.type}).
        Supported types: ${supportedTypes}`
      );
    }
    const component = this.resolver.resolveComponentFactory<Field>(components[this.config.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }

}
