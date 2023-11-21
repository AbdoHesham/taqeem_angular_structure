import { Injectable } from '@angular/core';
import { InputValidation } from '../utils/InputValidation';

@Injectable({
  providedIn: 'root'
})
export class GetFirstCharsService {

  constructor() { }
  getFirstChars(Name) {
    
    let firstTwoLetters = '';
    if (Name != null) {
      const spaceIndex = Name.indexOf(' ');
      if (spaceIndex === -1) {
        firstTwoLetters = Name.substring(0, 2);
      } else {
        firstTwoLetters = Name.substring(0, 1) + Name.substring(spaceIndex + 1, spaceIndex + 2);
      }
    }
if(   InputValidation.ArabicNumericWithspecialRegx.test(firstTwoLetters)){
  firstTwoLetters=firstTwoLetters?.[0]+' '+firstTwoLetters?.[1]
}

    return firstTwoLetters;
  }
}
