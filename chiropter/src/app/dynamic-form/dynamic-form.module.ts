import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFieldDirective } from './components/dynamic-field.directive';
import { DynamicFormComponent } from './dynamic-form.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormTypeRadioComponent } from './components/form-type-radio/form-type-radio.component';
import { FormDutyPeopleComponent } from './components/form-duty-people/form-duty-people.component';
import { FormSelectTwoComponent } from './components/form-select-two/form-select-two.component';
import { FormImgUplodaComponent } from './components/form-img-uploda/form-img-uploda.component';
import { FormDeadlineComponent } from './components/form-deadline/form-deadline.component';
import { FormTextareaComponent } from './components/form-textarea/form-textarea.component';
import { FormCheckboxComponent } from './components/form-checkbox/form-checkbox.component';
import { FormInputUserComponent } from './components/form-input-user/form-input-user.component';
import { FormInputPasswordComponent } from './components/form-input-password/form-input-password.component';
import { FormInputRememberComponent } from './components/form-input-remember/form-input-remember.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DynamicFieldDirective,
    DynamicFormComponent,
    FormInputComponent,
    FormSelectComponent,
    FormButtonComponent,
    FormTypeRadioComponent,
    FormDutyPeopleComponent,
    FormSelectTwoComponent,
    FormImgUplodaComponent,
    FormDeadlineComponent,
    FormTextareaComponent,
    FormCheckboxComponent,
    FormInputUserComponent,
    FormInputPasswordComponent,
    FormInputRememberComponent,
  ],
  exports: [
    DynamicFormComponent,
    DynamicFieldDirective
  ],
  entryComponents: [
    FormInputComponent,
    FormSelectComponent,
    FormButtonComponent,
    FormTypeRadioComponent,
    FormDutyPeopleComponent,
    FormSelectTwoComponent,
    FormImgUplodaComponent,
    FormImgUplodaComponent,
    FormDeadlineComponent,
    FormTextareaComponent,
    FormCheckboxComponent,
    FormInputUserComponent,
    FormInputPasswordComponent,
    FormInputRememberComponent,
  ]

})
export class DynamicFormModule { }
