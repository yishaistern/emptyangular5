import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Synagogue } from '../../../classes/synagogue';
import { Settings } from '../../../classes/global-objects/settings';
import { Fulldiction } from '../../../classes/global-objects';
@Component({
  selector: 'app-one-field',
  templateUrl: './one-field.component.html',
  styleUrls: ['./one-field.component.scss']
})
export class OneFieldComponent implements OnInit {
  @Input() synagogue: Synagogue;
  @Input() field: string;
  @Input() dictionstr: string;
  @Output() emit: EventEmitter<Fulldiction> = new EventEmitter(null);
  constructor( private set: Settings) { }
  /** user wants to edit a field */
  openEdit(): void {
    const send: Fulldiction = {diction: this.dictionstr, feild: this.field };
    this.emit.emit(send);
  }
  ngOnInit() {
  }

}
