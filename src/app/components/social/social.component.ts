import { Component } from '@angular/core';
import { SocialMediaLinksService } from '../../services/social-media-links.service';

@Component({
  selector: 'app-social',
  imports: [],
  providers: [SocialMediaLinksService],
  templateUrl: './social.component.html',
  styleUrl: './social.component.css',
})
export class SocialComponent {
  constructor(protected social: SocialMediaLinksService) {}
}
