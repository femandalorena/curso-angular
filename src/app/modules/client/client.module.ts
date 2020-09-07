import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Client1Component } from './components/client1/client1.component';
import { ClientRoutingModule } from './client-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ClientRoutingModule
  ],
  declarations: [
    Client1Component
  ]
})
export class ClientModule { }