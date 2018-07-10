import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { EditComponent } from './edit/edit.component';
import { DynamicFieldDirective } from './dynamic-form/components/dynamic-field.directive';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    DynamicFormModule,
  ],
  providers: [DynamicFieldDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
