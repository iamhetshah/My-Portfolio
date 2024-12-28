import { Component } from '@angular/core';
import AppConstants from '../../app.constants';

@Component({
  selector: 'app-social',
  imports: [],
  providers: [],
  templateUrl: './social.component.html',
  styleUrl: './social.component.css',
})
export class SocialComponent {
  protected social = AppConstants.social;
  constructor() {}
}
