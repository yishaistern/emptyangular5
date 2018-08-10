import { Injectable } from '@angular/core';
import { Synagogue } from '../../classes/synagogue';
import { GlobalFunctionsService } from '../global-functions/global-functions.service';
@Injectable()
export class SynagogueService {

  constructor(private global: GlobalFunctionsService) { }

  extractComponents(syn: Synagogue, content: any) {
    
  }
  editAfield(syn: Synagogue, field: string, contant: any): void {
    switch (field) {
      case 'name':
        syn.setNmae(contant);
      break;
      case 'fullAddress':
        if (contant.formatted_address) {
          syn.setFullAddress(contant.formatted_address);
        }

      break;
    }
  }

}
