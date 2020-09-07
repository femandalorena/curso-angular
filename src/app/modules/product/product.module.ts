import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { Product1Component } from './components/product1/product1.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ],
  declarations: [
    Product1Component
  ]
})
export class ProductModule { }