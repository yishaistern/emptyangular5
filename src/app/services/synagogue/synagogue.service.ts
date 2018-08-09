import { Injectable } from '@angular/core';
import { Synagogue } from '../../classes/synagogue';
@Injectable()
export class SynagogueService {

  constructor() { }

  editAfield(syn: Synagogue, field: string, contant: any): void {
    switch (field) {
      case 'name':
        syn.setNmae(contant);
      break;
    }
  }

}
