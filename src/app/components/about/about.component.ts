import { Component } from '@angular/core';
import AppConstants from '../../app.constants';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-about',
  imports: [SectionHeaderComponent, SectionComponent],
  providers: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  protected social = AppConstants.social;
  constructor() {}
}
