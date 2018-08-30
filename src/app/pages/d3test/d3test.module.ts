import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { D3testRoutingModule } from './d3test-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    D3testRoutingModule
  ],
  declarations: [MainComponent]
})
export class D3testModule { }
