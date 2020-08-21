import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doctor1Component } from './doctor1/doctor1.component';
import { Owner2Component } from '../owner/owner2/owner2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Doctor1Component,
    Owner2Component
  ]
})
export class DoctorModule { }