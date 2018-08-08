import { Injectable } from '@angular/core';
import { Language, Dayes } from '../../classes/global-objects';
import { GetHttpService } from '../get-http/get-http.service';
import { Settings } from '../../classes/global-objects/settings';
@Injectable()
export class SettingsService {

  constructor(private getter: GetHttpService, private set: Settings) { }
  /** get the vocbulary of the picked language
   * @param lang - witch language was picked
   * @returns a json of the piced langualge
   */
  getLangJson(lang: Language): void {
    const str = './assets/jsons/' + lang + '.json';
    this.getter.simpleGetter(str).subscribe((data) => {
      if (data) {
        this.set.diction = data;
        console.log(this.set);
        this.set.dayes = (this.set.diction.fullDayes) ? this.set.diction.fullDayes : new Dayes() ;
        this.set.shortDayes = (this.set.diction.shortDayes) ? this.set.diction.shortDayes : new Dayes() ;
      }
    });
  }

}
