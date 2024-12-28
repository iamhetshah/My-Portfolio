import { Component } from '@angular/core';
import CertificateModel from '../../models/certificate.model';
import { CertificateCardComponent } from '../certificate-card/certificate-card.component';

@Component({
  selector: 'app-certificates',
  imports: [CertificateCardComponent],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css',
})
export class CertificatesComponent {
  certificates: CertificateModel[] = [
    {
      name: 'Angular - The Complete Guide (2024 Edition)',
      issuer: 'Udemy',
      issue_date: new Date('2024-12-23'),
      credential_id: 'UC-8c35ca02-5f9f-4d87-bd41-84f0ab5dd056',
      credential_url:
        'https://www.udemy.com/certificate/UC-8c35ca02-5f9f-4d87-bd41-84f0ab5dd056/',
      skills: ['Angular'],
    },
    {
      name: 'Inheritance and Data Structures in Java',
      issuer: 'Coursera',
      issue_date: new Date('2023-09-03'),
      credential_id: '823CN2FKKKDA',
      credential_url:
        'https://www.coursera.org/account/accomplishments/certificate/823CN2FKKKDA',
      skills: ['Object-Oriented Programming (OOP)', 'Data Structures', 'Java'],
    },
    {
      name: 'Database Design and Basic SQL in PostgreSQL',
      issuer: 'Coursera',
      issue_date: new Date('2023-09-05'),
      credential_id: 'B3ZL6TKVZ2J6',
      credential_url:
        'https://www.coursera.org/account/accomplishments/certificate/B3ZL6TKVZ2J6',
      skills: ['Database Management System (DBMS)', 'SQL'],
    },
    {
      name: 'Introduction to Java',
      issuer: 'Coursera',
      issue_date: new Date('2023-02-25'),
      credential_id: 'EHMQMM2NYDXV',
      credential_url:
        'https://www.coursera.org/account/accomplishments/certificate/EHMQMM2NYDXV',
      skills: ['Java'],
    },
  ];
}
