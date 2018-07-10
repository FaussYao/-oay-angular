import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';
@Component({
  selector: 'app-form-select-two',
  templateUrl: './form-select-two.component.html',
  styleUrls: ['./form-select-two.component.scss']
})
export class FormSelectTwoComponent implements Field {
  private twoClassifys: any[] = [
    ['互联网产品', '互联网营销', '编程语言', '前端开发', '移动开发', '网络与运维', '游戏开发', '软件研发', '云计算大数据', '硬件研发', '人工智能'],
    ['公考求职', '法学院', '财汇金融', '医疗卫生', '建造工程', '人力资源', '心理咨询', '计算机等级', '办公软件', '技工技能', '企业培训', '创业教育'],
    ['领导力', '时间管理', '情绪管理', '阳光心态', '沟通管理', '个人管理', '人际关系', '思维逻辑', '商务礼仪'],
    ['职业发展', '人力规划', '招聘配置', '培训发展', '绩效管理', '薪酬管理', '员工管理', '办公技能', '专业设计', '法律法务', '企业战略', '商业模式'],
    ['投资管理', '音乐乐器', '文艺修养', '运动健康', '生活百科', '母婴亲子', '科学文化', '主持表演', '摄影摄像', '健康养生']
  ];
  private twoClassify: string[] = this.twoClassifys[0];

  config: FieldConfig;
  group: FormGroup;

 twoClick(event: any) {
    this.twoClassify = this.twoClassifys[event.target.selectedIndex];
  }

}
