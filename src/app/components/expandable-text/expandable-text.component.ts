import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-expandable-text',
  imports: [CommonModule],
  templateUrl: './expandable-text.component.html',
  styleUrl: './expandable-text.component.css',
})
export class ExpandableTextComponent {
  heading = input.required<string>();
  expanded = signal(false);
  text = input.required<string>();
}
