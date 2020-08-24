import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { User2RoutingModule } from './user2-routing.module';
import { User2Component } from './user2/user2.component';
import { User21Component } from './user21/user21.component';
import { User22Component } from './user22/user22.component';


@NgModule({
  declarations: [
    User2Component,
    User21Component,
    User22Component
  ],
  imports: [
    CommonModule,
    User2RoutingModule
  ]
})

export class UserModule { }