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
  map: google.maps.Map;
  marker: google.maps.Marker;
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
  /** map start */
  initMap(content) {
    const d = this;
    if (content.geometry && content.geometry.location) {
      this.map = new google.maps.Map(document.getElementById('map'),
      {
        center: content.geometry.location,
        zoom: 14,
        panControl: false,
        rotateControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        zoomControl: false
      });
      const markerOptions = {draggable: true, map: this.map, position: content.geometry.location};
      this.marker = new google.maps.Marker(markerOptions );
      if (content.geometry.viewport) {
        setTimeout(this.map.fitBounds(content.geometry.viewport), 10);
      }
      console.log(content);
    }
  }
  /** edit the feild of the synagogue */
  editField(content: any) {
    this.synService.editAfield(this.synagogue, this.full.feild, content);
    this.zone.run(() => { });
    switch (this.full.feild) {
      case 'fullAddress':
        console.log(content);
        this.initMap(content);
        break;

    }
  }
}
