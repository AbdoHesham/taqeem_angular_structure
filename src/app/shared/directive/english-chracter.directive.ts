import { Directive, HostListener, ElementRef, Input, forwardRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[EnglishChracter]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => EnglishChracterDirective),
    multi: true
}]
})
export class EnglishChracterDirective {

  private onChange: (val: string) => void;
  private onTouched: () => void;
  private value: string;

  constructor(
      private elementRef: ElementRef,
      private renderer: Renderer2
  ) {
  }

  @HostListener('input', ['$event.target.value'])
  onInputChange(value: string) {
      const filteredValue: string = filterValue(value);
      this.updateTextInput(filteredValue, this.value !== filteredValue);
  }

  @HostListener('blur')
  onBlur() {
      this.onTouched();
  }

  private updateTextInput(value: string, propagateChange: boolean) {
      this.renderer.setProperty(this.elementRef.nativeElement, 'value', value);
      if (propagateChange) {
          this.onChange(value);
      }
      this.value = value;
  }

  // ControlValueAccessor Interface
  registerOnChange(fn: any): void {
      this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
      this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
      this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
  }

  writeValue(value: any): void {
      value = value ? String(value) : '';
      this.updateTextInput(value, false);
  }
}

function filterValue(value): string {
  return value.replace(/[^A-Za-z ]/g, '');
}

  //   regexStr = '^[a-zA-Z ]*$';
//   @Input() isAlphaNumeric: boolean;

//   constructor(private el: ElementRef) {}

//   @HostListener('keypress', ['$event']) onKeyPress(event) {
//     return new RegExp(this.regexStr).test(event.key);
//   }

//   @HostListener('paste', ['$event']) blockPaste(event: KeyboardEvent) {
//     this.validateFields(event);
//   }

//   validateFields(event) {
//     console.log(event.target.value);
//     setTimeout(() => {
//       this.el.nativeElement.value = this.el.nativeElement.value
//         .replace(/[^A-Za-z ]/g, '')
//         .replace(/\s/g, '');
//       event.preventDefault();
//     }, 100);
//   }
// }
