import { Component, OnInit, Input } from '@angular/core';
import { Synagogue } from '../../../classes/synagogue';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  openEditor: boolean;
  showEditor: boolean;
  @Input() synagogue: Synagogue;
  constructor() { }

  ngOnInit() {
  }
  /** when user wants to edit a field for the synagogue */
  onEdit($event) {
    console.log($event);
    this.openEditor = true;
    setTimeout(this.showEditor = true , 10);
  }
}
