import { Component, input } from '@angular/core';
import CertificateModel from '../../models/certificate.model';
import { DatePipe } from '@angular/common';
import { SkillPillComponent } from '../skill-pill/skill-pill.component';
import { BaseCardComponent } from '../base-card/base-card.component';

@Component({
  selector: 'app-certificate-card',
  imports: [DatePipe, SkillPillComponent, BaseCardComponent],
  templateUrl: './certificate-card.component.html',
  styleUrl: './certificate-card.component.css',
})
export class CertificateCardComponent {
  certificate = input.required<CertificateModel>();
}
