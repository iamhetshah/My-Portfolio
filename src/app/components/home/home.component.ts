import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicDetailsComponent } from '../basic-details/basic-details.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, BasicDetailsComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
