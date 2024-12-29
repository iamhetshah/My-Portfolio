import { Component } from '@angular/core';
import AppConstants from '../../app.constants';

@Component({
  selector: 'app-basic-details',
  imports: [],
  templateUrl: './basic-details.component.html',
  styleUrl: './basic-details.component.css',
})
export class BasicDetailsComponent {
  profile = AppConstants.me.profile;
}
