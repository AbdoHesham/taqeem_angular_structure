import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-shared-button',
  templateUrl: './shared-button.component.html',
  styleUrl: './shared-button.component.scss',
  standalone: true,
  imports: [MatButtonModule]
})
export class SharedButtonComponent {
  @Input() label: string = '';
  @Input() tooltip: string = '';
  @Input() isDisabled: boolean = false;
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  handleClick(): void {
    if (!this.isDisabled) {
      this.buttonClick.emit();
    }
  }
}
