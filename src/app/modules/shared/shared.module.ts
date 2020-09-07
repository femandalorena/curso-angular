import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shared2Directive } from './shared2.directive';
import { Shared1Component } from './components/shared1/shared1.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Shared2Directive,
    Shared1Component
  ]
})
export class SharedModule { }