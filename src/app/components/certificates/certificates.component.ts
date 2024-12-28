import { Component, computed, signal } from '@angular/core';
import CertificateModel from '../../models/certificate.model';
import { CertificateCardComponent } from '../certificate-card/certificate-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificates',
  imports: [CertificateCardComponent, CommonModule],
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
  offset = signal<number>(0);
  offset_certificates = computed(() => {
    const result = [];
    const offset = this.offset();
    const maxIndex = this.certificates.length - 1;

    for (let i = 0; i < 1; i++) {
      const index = i + offset;
      if (index <= maxIndex) {
        result.push(this.certificates[index]);
      }
    }
    return result;
  });

  updateOffset(inc: boolean) {
    this.offset.update((old) => {
      const maxOffset = this.certificates.length - 1;

      if (inc) {
        return Math.min(old + 1, maxOffset); // Ensure it doesn't exceed maxOffset
      } else {
        return Math.max(old - 1, 0); // Ensure it doesn't go below 0
      }
    });
  }
}
