import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Settings } from '../app/classes/global-objects/settings';
import { Language, Directions } from './classes/global-objects';
import { SettingsService } from '../app/services/settings/settings.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  direction: string;
  constructor(private router: Router, private set: Settings, private setService: SettingsService) {
    this.setLang();
    this.setService.getLangJson(this.set.lang);
    switch (this.set.lang) {
      case Language.he:
        this.set.direction = Directions.rtl;
      break;
      case Language.en:
        this.set.direction = Directions.ltr;
      break;
      default:
        this.set.direction = Directions.rtl;
      break;
    }
  }
  setLang() {
    this.set.lang = Language.he;
  }
  goto(str) {
    this.router.navigate(str);
  }
}
