import { Component,  ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'app-form-img-uploda',
  templateUrl: './form-img-uploda.component.html',
  styleUrls: ['./form-img-uploda.component.scss']
})
export class FormImgUplodaComponent implements Field {
  @ViewChild('imgUpload') private imgUpload: ElementRef;

  config: FieldConfig;
  group: FormGroup;
  private isHaveImg: boolean = false;
  private picUrl: string = null;

  imageClick(e) {
    console.log(e);
    this.imgUpload.nativeElement.click();
    this.selectedFileOnChanged();
  }


  selectedFileOnChanged() {
    // console.log(this.imgUpload.nativeElement.files[0]);
    const imgFile = this.imgUpload.nativeElement.files[0];

    const reader = new FileReader();

    reader.onload = (event: any) => {
      const imgData = event.target.result;
      this.isHaveImg = true;
      this.picUrl = imgData;
    };
    reader.readAsDataURL(imgFile);
  }

}
