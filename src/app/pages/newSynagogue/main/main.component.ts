import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Settings } from '../../../classes/global-objects/settings';
import { Synagogue } from '../../../classes/synagogue';
import { DetailsSynagogue } from '../../../classes/global-objects';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  showDetails: DetailsSynagogue;
  flag1Details = DetailsSynagogue.pry;
  synagogue: Synagogue;
  flag2Details = DetailsSynagogue.synagogue;
  constructor(private router: Router, private set: Settings) {
    this.initSynagogue();
   }
  /** alert main component that the user picked what to see */
  onPick($event: DetailsSynagogue): void {
    this.showDetails = $event;
    console.log(this.showDetails);
  }
  /** INIT THE  Synagogue*/
  initSynagogue() {
    this.synagogue = new Synagogue();
  }
  ngOnInit() {

  }


}
