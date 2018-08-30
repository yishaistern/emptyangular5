import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Links } from './classes/global-objects';

const routes: Routes = [
    {path: Links.newSynagogue, loadChildren: 'app/pages/newSynagogue/newSynagogue.module#NewSynagogueModule'},
    {path: Links.d3, loadChildren: 'app/pages/d3test/d3test.module#D3testModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
