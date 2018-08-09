import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Settings } from '../../../classes/global-objects/settings';
import { detailTypes, Fulldiction } from '../../../classes/global-objects';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  @Input() full: Fulldiction;
  @Input() type: detailTypes;
  @Output() emit: EventEmitter<string> = new EventEmitter(undefined);
  constructor(private set: Settings) { }

  ngOnInit() {
    this.specialInit();
  }
  /** does the componet need ant special init */
  specialInit() {

  }
  /** WHEN user finishes to edit */
  onblur($event) {
    if ($event.target) {
      this.emit.emit($event.target.value);
    }

  }

}
