import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { BasicDetailsComponent } from '../basic-details/basic-details.component';
import { CertificatesComponent } from '../certificates/certificates.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SocialComponent } from '../social/social.component';

@Component({
  selector: 'app-layout',
  imports: [
    BasicDetailsComponent,
    AboutComponent,
    ProjectsComponent,
    CertificatesComponent,
    ExperienceComponent,
    SocialComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
