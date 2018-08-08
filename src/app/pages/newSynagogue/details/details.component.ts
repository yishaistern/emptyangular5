import { Component, OnInit, Input } from '@angular/core';
import { Synagogue } from '../../../classes/synagogue';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() synagogue: Synagogue;
  constructor() { }

  ngOnInit() {
  }

}
