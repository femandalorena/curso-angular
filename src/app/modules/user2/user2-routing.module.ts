import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {User2Component} from './user2/user2.component';

const routes: Routes = [
  {path: '', component: User2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class User2RoutingModule { }
