import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StudentsRoutingModule} from './students-routing.module';
import {StudentsComponent} from './students.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductService} from '../../shared/services/product.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
  StudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    ProductService
  ]
})
export class StudentsModule {
}
