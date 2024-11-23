import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SocialMediaLinksService {
  private social = {
    github: 'https://github.com/iamhetshah',
    instagram: 'https://www.instagram.com/het.x25/',
    linkedin: 'https://www.linkedin.com/in/het-shah-ba2848171/',
    ahnad_instagram: 'https://www.instagram.com/anhad_sangeet/',
  };
  constructor() {}

  getLinks() {
    return this.social;
  }
}
