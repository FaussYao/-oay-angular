import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker.component';
import { RangePickerComponent } from './range-picker/range-picker.component';
import { DomePickerComponent } from './dome-picker/dome-picker.component';
import { ColumnRangePickerComponent } from './column-range-picker/column-range-picker.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DatePickerComponent,
    RangePickerComponent,
    DomePickerComponent,
    ColumnRangePickerComponent
  ],
  exports: [
    DatePickerComponent,
    RangePickerComponent,
    DomePickerComponent,
    ColumnRangePickerComponent
  ]
})
export class DatePickerModule { }
