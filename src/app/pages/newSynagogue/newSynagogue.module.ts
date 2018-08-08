import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewSynagogueRoutingModule } from './newSynagogue-routing.module';
import { MainComponent } from './main/main.component';
import { OneFieldComponent } from './one-field/one-field.component';
import { BoxpickComponent } from './boxpick/boxpick.component';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './details/details.component';
import { PryDetailsComponent } from './pry-details/pry-details.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    NewSynagogueRoutingModule
  ],
  declarations: [MainComponent, OneFieldComponent, BoxpickComponent, HeaderComponent, DetailsComponent, PryDetailsComponent, FooterComponent]
})
export class NewSynagogueModule { }
