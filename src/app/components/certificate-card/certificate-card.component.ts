import { Component, input } from '@angular/core';
import CertificateModel from '../../models/certificate.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-certificate-card',
  imports: [DatePipe],
  templateUrl: './certificate-card.component.html',
  styleUrl: './certificate-card.component.css',
})
export class CertificateCardComponent {
  certificate = input.required<CertificateModel>();
}
