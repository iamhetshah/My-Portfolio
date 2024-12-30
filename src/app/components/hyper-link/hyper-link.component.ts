import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hyper-link',
  imports: [],
  templateUrl: './hyper-link.component.html',
  styleUrl: './hyper-link.component.css',
})
export class HyperLinkComponent {
  href = input.required<string>();
}
