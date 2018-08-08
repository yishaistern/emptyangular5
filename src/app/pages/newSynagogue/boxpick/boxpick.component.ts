import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Settings } from '../../../classes/global-objects/settings';
import { DetailsSynagogue } from '../../../classes/global-objects';
@Component({
  selector: 'app-boxpick',
  templateUrl: './boxpick.component.html',
  styleUrls: ['./boxpick.component.scss']
})
export class BoxpickComponent implements OnInit {
  showDetails: DetailsSynagogue;
  @Output() emit: EventEmitter<DetailsSynagogue> = new EventEmitter(null);
  constructor( private set: Settings) { }

  ngOnInit() {
  }

  /** the user picked witch details to pick */
  pick(num: number) {
    this.showDetails = (num === 1) ? DetailsSynagogue.synagogue : DetailsSynagogue.pry;
    this.emit.emit(this.showDetails);
  }
}
