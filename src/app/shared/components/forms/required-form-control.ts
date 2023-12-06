import { ControlValueAccessor, FormControl } from '@angular/forms';
export class RequiredFormControl extends FormControl {
  required = true;
}