import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shared-button',
  templateUrl: './shared-button.component.html',
  styleUrls:[ './shared-button.component.scss']
})
export class SharedButtonComponent {
  @Input() label: string = '';
  @Input() tooltip: string = '';
  @Input() isDisabled: boolean = false; // Added disabled input
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  handleClick(): void {
    if (!this.isDisabled) {
      this.buttonClick.emit();
    }
  }
}
