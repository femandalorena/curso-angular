
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Client1Component } from './components/client1/client1.component';

const routes: Routes = [
  {path: '', component: Client1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }