import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user2-routing.module';
import { UserComponent } from './user2/user2.component';


@NgModule({
  declarations: [
    User2Component
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})

export class UserModule { }