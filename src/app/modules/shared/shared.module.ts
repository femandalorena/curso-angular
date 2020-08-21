import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shared1Component } from './shared1/shared1.component';
import { Shared2Directive } from './directives/shared2.directive';
import { Shared3Pipe } from './pipes/shared3.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Shared1Component,
    Shared2Directive,
    Shared3Pipe
  ]
})
export class SharedModule { }