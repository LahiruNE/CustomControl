import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {states, State} from './state.model';

@Component({
  selector: 'app-controller-component',
  templateUrl: './controller-component.component.html',
  styleUrls: ['./controller-component.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ControllerComponentComponent),
      multi: true
    }
  ],
})
export class ControllerComponentComponent implements ControlValueAccessor {

  constructor() { }  

  @Input()
  name: string;
  @Input('value')
  val: string;

  stateList: State[] = states;
  // Both onChange and onTouched are functions
  onChange: any = () => { };
  onTouched: any = () => { };

  get value() {
    return this.val;
  }

  set value(val) {
    this.val = val;
    this.onChange(val);
    this.onTouched();
  }
  // We implement this method to keep a reference to the onChange
  // callback function passed by the forms API
  registerOnChange(fn) {
    this.onChange = fn;
    console.log(fn);
  }
  // We implement this method to keep a reference to the onTouched
  //callback function passed by the forms API
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  // This is a basic setter that the forms API is going to use
  writeValue(value) {
    if (value) {
      this.value = value;
      console.log(value);
    }
  }


}
