import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import { ContactCardComponent } from '../contact-card/contact-card.component';

@Component({
  selector: 'app-contact',
  imports: [SectionHeaderComponent, ContactCardComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {}
