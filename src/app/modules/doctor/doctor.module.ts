import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doctor1Component } from './doctor1/doctor1.component';
import { Doctor2Component } from './doctor2/doctor2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Doctor1Component,
    Doctor2Component
  ]
})
export class DoctorModule { }