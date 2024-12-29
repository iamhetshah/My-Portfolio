import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicDetailsComponent } from '../basic-details/basic-details.component';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { CertificatesComponent } from '../certificates/certificates.component';
import { ActivatedRoute } from '@angular/router';
import { ExperienceComponent } from '../experience/experience.component';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, LayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  ngAfterViewInit(): void {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.scrollY > 50;
    });
  }
  windowScrolled = false;
  scrollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  ngOnInit() {
    this.activatedRoute.fragment.subscribe((fragment: string | null) => {
      if (fragment) this.jumpToSection(fragment);
    });
  }

  jumpToSection(section: string | null) {
    if (section)
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
