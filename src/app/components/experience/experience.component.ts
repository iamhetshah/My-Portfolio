import { Component } from '@angular/core';
import ExperienceModel from '../../models/experience.model';
import { ExperienceCardComponent } from '../experience-card/experience-card.component';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-experience',
  imports: [ExperienceCardComponent, SectionHeaderComponent, SectionComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  experiences: ExperienceModel[] = [
    {
      designation: 'Web Developer Intern',
      type: 'internship',
      company: 'Humbee Design Studio',
      company_logo: 'humbeestudio_logo.jpeg',
      company_website: 'https://humbeestudio.com/',
      start_date: new Date(2024, 7, 22),
      location_type: 'on-site',
      description:
        'Developed a feature-rich canvas designer for invoice template designing, incorporating undo/redo functionality for efficient state management. Implemented a layer management system with drag-and-drop and nested group control. Integrated a dynamic property panel for real-time canvas object customization and added support for exporting multiple formats, including PNG, JPG, PDF, SVG, and JSON.',
      skills: ['Angular', 'Web Developement'],
      location: 'ahmedabad',
    },
  ];
}
