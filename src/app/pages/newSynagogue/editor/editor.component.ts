import { Component, OnInit, Input, Output, EventEmitter, NgZone } from '@angular/core';
import { Settings } from '../../../classes/global-objects/settings';
import { detailTypes, Fulldiction } from '../../../classes/global-objects';
import { } from '@types/googlemaps';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  @Input() full: Fulldiction;
  @Input() type: detailTypes;
  @Output() emit: EventEmitter<any> = new EventEmitter(undefined);
  autocomplelte: google.maps.places.Autocomplete;
  constructor(private set: Settings, private zone: NgZone) { }

  ngOnInit() {
    this.specialInit();
  }
  /** does the componet need ant special init */
  specialInit() {
    const d = this;
    if (this.type === detailTypes.autocomplete) {
      this.autocomplelte =  new  google.maps.places.Autocomplete(<HTMLInputElement>document.getElementById('auto'));
      this.autocomplelte.addListener('place_changed', function() {
        const place = d.autocomplelte.getPlace();
        d.zone.run(() => { });
        d.emit.emit(place);
      });
    }
  }
  /** WHEN user finishes to edit */
  onblur($event) {
    if (this.type === detailTypes.normal) {
      if ($event.target) {
        this.emit.emit($event.target.value);
      }
    }

  }

}
