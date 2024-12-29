import { Component, input } from '@angular/core';
import ExperienceModel from '../../models/experience.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-experience-card',
  imports: [DatePipe],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.css',
})
export class ExperienceCardComponent {
  experience = input.required<ExperienceModel>();
  getDateDifference(startDate: Date, endDate: Date = new Date()): number {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isNaN(start.getTime())) {
      throw new Error('Invalid start date.');
    }

    if (isNaN(end.getTime())) {
      throw new Error('Invalid end date.');
    }

    const differenceInMs = end.getTime() - start.getTime();

    const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

    return differenceInDays;
  }
  convertDaysToMonthsAndYears(
    days: number
  ): { years: number; months: number } | { months: number } {
    if (days < 0) {
      throw new Error('Number of days cannot be negative.');
    }

    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years > 0) {
      return { years, months: remainingMonths };
    }

    return { months };
  }
  formatYearsAndMonths(input: { years?: number; months?: number }): string {
    const { years, months } = input;

    let result = '';

    if (years && years > 0) {
      result += `${years} yrs`;
    }

    if (months && months > 0) {
      if (result) {
        result += ` `;
      }
      result += `${months} mos`;
    }

    return result || '0 mos';
  }

  finalWorkedString(startDate: Date, endDate: Date = new Date()): string {
    return this.formatYearsAndMonths(
      this.convertDaysToMonthsAndYears(
        this.getDateDifference(startDate, endDate)
      )
    );
  }
}
