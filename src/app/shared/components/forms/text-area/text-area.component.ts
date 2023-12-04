import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class TextAreaComponent implements OnInit {

  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() hint: string = '';
  @Input() rows: number = 1;
  @Input() isDisabled: boolean = false;
  @Output() inputChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
