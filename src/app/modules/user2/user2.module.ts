import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { User2RoutingModule } from './user2-routing.module';
import { User2Component } from './user2/user2.component';


@NgModule({
  declarations: [
    User2Component
  ],
  imports: [
    CommonModule,
    User2RoutingModule
  ]
})

export class UserModule { }