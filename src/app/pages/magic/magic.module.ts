import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MagicRoutingModule } from './magic-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    MagicRoutingModule
  ],
  declarations: [MainComponent]
})
export class MagicModule { }
