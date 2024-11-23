import { Component } from '@angular/core';
import { SocialMediaLinksService } from '../../services/social-media-links.service';

@Component({
  selector: 'app-about',
  imports: [],
  providers: [SocialMediaLinksService],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(protected social: SocialMediaLinksService) {}
}
