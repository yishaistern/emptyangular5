import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartjstestRoutingModule } from './chartjstest-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    ChartjstestRoutingModule
  ],
  declarations: [MainComponent]
})
export class ChartjstestModule { }
