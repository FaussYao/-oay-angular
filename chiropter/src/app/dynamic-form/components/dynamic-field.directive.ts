import { OnChanges, OnInit, ComponentRef, Input, Directive, Type, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../models/field.interface';
import { FieldConfig } from '../models/field-config.interface';

import { FormInputComponent } from './form-input/form-input.component';
import { FormButtonComponent } from './form-button/form-button.component';

const components: { [type: string]: Type<Field> } = {
  input: FormInputComponent,
  button: FormButtonComponent,
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
    private resolver: ComponentFactoryResolver,       /*  动态创建组件 */
    private container: ViewContainerRef
  ) {
  }

  // 运维/* 笔记 */
  ngOnInit() {
    if (!components[this.config.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.type}).Supported types: ${supportedTypes}`
      );
    }

    const component = this.resolver.resolveComponentFactory<Field>(components[this.config.type]);
    this.component = this.container.createComponent(component);

    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }

  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }


}
/**
在我们定义 createComponent() 方法前，我们需要注入 ComponentFactoryResolver 服务对象。
该 ComponentFactoryResolver 服务对象中，提供了一个很重要的方法 - resolveComponentFactory() ，
该方法接收一个组件类作为参数，并返回 ComponentFactory 。
 */
