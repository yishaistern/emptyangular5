import { Component, OnInit, Input } from '@angular/core';
import { Synagogue } from '../../../classes/synagogue';
@Component({
  selector: 'app-pry-details',
  templateUrl: './pry-details.component.html',
  styleUrls: ['./pry-details.component.scss']
})
export class PryDetailsComponent implements OnInit {
  @Input() synagogue: Synagogue;
  constructor() { }

  ngOnInit() {
  }

}
