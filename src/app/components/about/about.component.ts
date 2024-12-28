import { Component } from '@angular/core';
import AppConstants from '../../app.constants';

@Component({
  selector: 'app-about',
  imports: [],
  providers: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  protected social = AppConstants.social;
  constructor() {}
}
