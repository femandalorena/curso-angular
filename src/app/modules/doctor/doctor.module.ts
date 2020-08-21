import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doctor1Component } from './doctor1/doctor1.component';
import { Owner2Component } from '../owner/owner2/owner2.component';
import { OwnerModule } from '../owner/owner.module';

@NgModule({
  imports: [
    CommonModule,
    OwnerModule
  ],
  declarations: [
    Doctor1Component
  ]
})
export class DoctorModule { }