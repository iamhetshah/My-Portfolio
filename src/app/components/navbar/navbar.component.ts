import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  hide = true;

  constructor(private router: Router) {}

  navigateTo(fragment: string) {
    this.router
      .navigate([''], {
        fragment,
      })
      .finally(() => {
        this.toggleNavbar();
      });
  }

  toggleNavbar() {
    this.hide = !this.hide;
  }
}
