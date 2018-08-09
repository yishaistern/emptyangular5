import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Synagogue } from '../../../classes/synagogue';
import { detailTypes, Fulldiction } from '../../../classes/global-objects';
import { SynagogueService } from '../../../services/synagogue/synagogue.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  openEditor: boolean;
  showEditor: boolean;
  type: detailTypes;
  full: Fulldiction;
  @Input() synagogue: Synagogue;
  constructor(private synService: SynagogueService, private zone: NgZone) { }

  ngOnInit() {
  }
  /** when user wants to edit a field for the synagogue */
  onEdit($event: Fulldiction) {
    this.full = $event;
    /** which type should the editor */
    switch (this.full.feild) {
      case 'fullAddress':
        this.type = detailTypes.autocomplete;
      break;
      default:
        this.type = detailTypes.normal;
    }
    this.openEditor = true;
    setTimeout(this.showEditor = true , 10);
  }
  /** User finshed to editing */
  finishEditing($event: any): void {
    this.openEditor = false;
    setTimeout(this.showEditor = false , 10);
    this.editField($event);
  }
  /** edit the feild of the synagogue */
  editField(content: any) {
    this.synService.editAfield(this.synagogue, this.full.feild, content);
    this.zone.run(() => { });
    switch (this.full.feild) {
      case 'name':

    }
  }
}
