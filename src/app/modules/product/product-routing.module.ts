
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Product1Component } from './components/product1/product1.component';

const routes: Routes = [
  {path: '', component: Product1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }