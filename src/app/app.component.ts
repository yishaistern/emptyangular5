import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Settings } from '../app/classes/global-objects/settings';
import { Language } from './classes/global-objects';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private router: Router, private set: Settings) {
    this.set.lang = Language.he;
  }
  goto(str) {
    this.router.navigate(str);
  }
}
