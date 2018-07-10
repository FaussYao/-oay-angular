import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { DynamicFieldDirective } from './components/dynamic-field.directive';
import { FormButtonComponent } from './components/form-button/form-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DynamicFormComponent,
    DynamicFieldDirective,
    FormInputComponent,
    FormButtonComponent,
  ],
  exports: [
    DynamicFormComponent,
    FormButtonComponent,
    DynamicFieldDirective
  ],
  entryComponents: [
    FormInputComponent
  ]
})
export class DynamicFormModule { }
