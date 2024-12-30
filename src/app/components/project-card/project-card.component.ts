import { Component, input } from '@angular/core';
import ProjectModel from '../../models/project.model';
import { DatePipe } from '@angular/common';
import { ExpandableTextComponent } from '../expandable-text/expandable-text.component';
import { SkillPillComponent } from '../skill-pill/skill-pill.component';
import { BaseCardComponent } from '../base-card/base-card.component';

@Component({
  selector: 'app-project-card',
  imports: [
    DatePipe,
    ExpandableTextComponent,
    SkillPillComponent,
    BaseCardComponent,
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  project = input.required<ProjectModel>();
  constructor() {}
}
