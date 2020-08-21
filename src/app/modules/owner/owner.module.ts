import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Owner1Component } from './owner1/owner1.component';
import { Owner2Component } from './owner2/owner2.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    Owner1Component,
    Owner2Component
  ]
})
export class OwnerModule { }