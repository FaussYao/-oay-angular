import { Component, OnInit } from '@angular/core';
import '../../../../../assets/js/bootstrap-datetimepicker';
import '../../../../../assets/js/bootstrap-datetimepicker.zh-CN';
declare let $: any;
@Component({
  selector: 'app-dome-picker',
  templateUrl: './dome-picker.component.html',
  styleUrls: ['./dome-picker.component.scss']
})
export class DomePickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.form_datetime').datetimepicker({
      language: 'zh-CN',
      weekStart: 1,
      todayBtn: 1,
      autoclose: 1,
      todayHighlight: 1,
      startView: 2,
      forceParse: 0,
      showMeridian: 1
    });

    $('.form_date').datetimepicker({
      language: 'zh-CN',
      weekStart: 1,
      todayBtn: 1,
      autoclose: 1,
      todayHighlight: 1,
      startView: 2,
      minView: 2,
      forceParse: 0
    });

    $('.form_time').datetimepicker({
      language: 'zh-CN',
      weekStart: 1,
      todayBtn: 1,
      autoclose: 1,
      todayHighlight: 1,
      startView: 1,
      minView: 0,
      maxView: 1,
      forceParse: 0
    });


  }

  formDatetimeOay() {
    $('.form_datetime').datetimepicker({
      // language:  'fr',
      weekStart: 1,
      todayBtn: 1,
      autoclose: 1,
      todayHighlight: 1,
      startView: 2,
      forceParse: 0,
      showMeridian: 1
    });
    $('.form_date').datetimepicker({
      language: 'fr',
      weekStart: 1,
      todayBtn: 1,
      autoclose: 1,
      todayHighlight: 1,
      startView: 2,
      minView: 2,
      forceParse: 0
    });
    $('.form_time').datetimepicker({
      language: 'fr',
      weekStart: 1,
      todayBtn: 1,
      autoclose: 1,
      todayHighlight: 1,
      startView: 1,
      minView: 0,
      maxView: 1,
      forceParse: 0
    });
    $('.form-datetime-oay01').datetimepicker({
      format: 'yyyy-mm-dd', // 显示格式
      todayHighlight: 1, // 今天高亮
      minView: 'month', // 设置只显示到月份
      startView: 2,
      forceParse: 0,
      showMeridian: 1,
      autoclose: 1// 选择后自动关闭
    });
    $('.form-datetime-oay02').datetimepicker();
    $('.form-datetime-oay03').datetimepicker({
      format: 'yyyy-mm-dd',
      autoclose: true, // 自动关闭
      minView: 2, // 最精准的时间选择为日期0-分 1-时 2-日 3-月
      weekStart: 0
    });
    $('.form-datetime-oay04').datetimepicker('setStartDate', '2012-01-01');
    // $(".form-datetime-oay04").datetimepicker('setStartDate');
    // $(".form-datetime-oay04").datetimepicker('setStartDate', null);

    $('.form-datetime-oay05').datetimepicker('setEndDate', '2018-08-30');
    $('.form-datetime-oay06').datetimepicker('setDaysOfWeekDisabled', [0, 6]);
  }


  // 获取时间值
  getdatetime() {
    $('.form-datatime-oay02').val(); // "2018-07-02 10:35"
    $('.form-datatime-oay02').data('datetimepicker').getDate(); // Mon Jul 02 2018 10:35:23 GMT+0800 (中国标准时间)
  }

}
