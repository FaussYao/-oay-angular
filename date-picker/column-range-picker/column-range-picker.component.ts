import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import '../../../../../assets/js/bootstrap-datetimepicker';
import '../../../../../assets/js/bootstrap-datetimepicker.zh-CN';

declare let $: any;

@Component({
  selector: 'app-column-range-picker',
  templateUrl: './column-range-picker.component.html',
  styleUrls: ['./column-range-picker.component.scss']
})
export class ColumnRangePickerComponent implements OnInit {
  datetime: {start: string; end: string };
  @ViewChild('columnDateStart') public columnDateStart: ElementRef;
  @ViewChild('columnDateEnd') public columnDateEnd: ElementRef;
  constructor() { }

  ngOnInit() {
    this.datetimePicker();
  }
  datetimePicker() {
    $('.column-date-start').datetimepicker({
      language: 'zh-CN',
      format: 'yyyy年mm月dd', // 显示格式
      todayHighlight: 1, // 今天高亮
      minView: 2, // 最精准的时间选择为日期0-分 1-时 2-日 3-月
      autoclose: 1, // 选择后自动关闭
      startDate: '2018-07-07',
      endDate: '2018-08-30'
    });
    $('.column-date-end').datetimepicker({
      language: 'zh-CN',
      format: 'yyyy年mm月dd', // 显示格式
      todayHighlight: 1, // 今天高亮
      minView: 2, // 最精准的时间选择为日期0-分 1-时 2-日 3-月
      autoclose: 1, // 选择后自动关闭
      startDate: '2018-07-07',
      endDate: '2018-08-30'
    });
  }
  getDatetime() {
    this.datetime.start = $('.column-date-start').val();
    this.datetime.end = $('.column-date-end').val();
  }
}
