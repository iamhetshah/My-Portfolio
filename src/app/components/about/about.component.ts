import { Component } from '@angular/core';
import AppConstants from '../../app.constants';
import { SectionHeaderComponent } from '../section-header/section-header.component';

@Component({
  selector: 'app-about',
  imports: [SectionHeaderComponent],
  providers: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  protected social = AppConstants.social;
  constructor() {}
}
