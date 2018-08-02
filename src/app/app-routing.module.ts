import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Links } from './classes/global-objects';

const routes: Routes = [
    {path: Links.newSynagogue, loadChildren: 'app/pages/newSynagogue/newSynagogue.module#ewSynagogueModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
