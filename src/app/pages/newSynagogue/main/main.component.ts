import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Settings } from '../../../classes/global-objects/settings';
import { DetailsSynagogue } from '../../../classes/global-objects';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  showDetails: DetailsSynagogue;
  flag1Details = DetailsSynagogue.pry;
  flag2Details = DetailsSynagogue.synagogue;
  constructor(private router: Router, private set: Settings) { }
  /** alert main component that the user picked what to see */
  onPick($event: DetailsSynagogue): void {
    this.showDetails = $event;
    console.log(this.showDetails);
  }
  ngOnInit() {

  }


}
