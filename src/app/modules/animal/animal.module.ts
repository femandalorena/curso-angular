import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DoctorModule } from '../doctor/doctor.module';
import { Animal1Component } from './animal1/animal1.component';
import { Animal2Component } from './animal2/animal2.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DoctorModule
  ],
  declarations: [
    Animal1Component,
    Animal2Component
  ]
})
export class AnimalModule { }