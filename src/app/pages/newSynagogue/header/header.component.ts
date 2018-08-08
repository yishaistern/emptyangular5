import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Settings } from '../../../classes/global-objects/settings';
import { DetailsSynagogue } from '../../../classes/global-objects';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showDetails: DetailsSynagogue;
  @Output() emit: EventEmitter<DetailsSynagogue> = new EventEmitter(null);
  constructor( private set: Settings) { }
  @Input()
  set detailsChange(de: DetailsSynagogue) {
    this.showDetails = de;
  }
  ngOnInit() {
  }
  /** the user picked witch details to pick */
  pick(num: number) {
    this.showDetails = (num === 1) ? DetailsSynagogue.synagogue : DetailsSynagogue.pry;
    this.emit.emit(this.showDetails);
  }
}
