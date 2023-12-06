import { Component, forwardRef, Input, Self, Optional, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { of } from 'rxjs';
import { skipWhile, take } from 'rxjs/operators';
import {RequiredFormControl} from './required-form-control';

@Component({
    template: ''
  })

export abstract class AbstractFormFieldComponent implements ControlValueAccessor, AfterViewInit {

  // tslint:disable-next-line:variable-name
  _formControl = new FormControl(); 
  onChange = (value: any) => {};

 constructor(@Self() @Optional() public ngControl: NgControl) {
    if(this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngAfterViewInit(): void {
    if (this.ngControl) {
      /**
       * get a handle on the FormControl that was created in the last Reactive FormGroup in the component injection hierarchy
       * so that it can be bound to the input in our Custom Component
       * this ensures input value binding to model + explicit validation is bound
       * e.g. new FormGroup({ titleId: new FormControl(personalDetails.titleId, Validators.required) } =>
       *    <input [formControl]="this.formControl"
       * otherwise you will have to do that manually for evey single control on every single form
       * which is obviously a lot of repeating yourself
       */

      of(this.ngControl.control)
        .pipe(
          skipWhile(fc => !fc),
          take(1)
        )
        .subscribe(fc => {
          this.formControl = fc as FormControl;
          console.log(
            'Custom FormControl (AbstractFormFieldComponent): Binding to Reactive Form',
            this.ngControl,
            this.ngControl.control
          );
        });
    }
  }

  get formControl() :FormControl|RequiredFormControl {
    return this._formControl;
  }
  set formControl(forControl:FormControl|RequiredFormControl)  {
    this._formControl = forControl;
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: (value: any) => void): void {}

  writeValue(value: any): void {
    if(this.formControl) this.formControl.setValue(value, { emitEvent: false });
  }
}
