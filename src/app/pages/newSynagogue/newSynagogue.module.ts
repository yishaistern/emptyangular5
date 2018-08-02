import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewSynagogueRoutingModule } from './newSynagogue-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    NewSynagogueRoutingModule
  ],
  declarations: [MainComponent]
})
export class NewSynagogueModule { }
