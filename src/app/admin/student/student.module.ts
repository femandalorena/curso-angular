import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StudentRoutingModule} from './student-routing.module';
import {StudentComponent} from './student.component';
import {ReactiveFormsModule} from '@angular/forms';
import {StudentService} from '../../shared/services/student.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NamePipe, StudentService} from '../../shared/name.pipe';


@NgModule({
  declarations: [
    StudentComponent,
    NamePipe
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    StudentService
  ]
})
export class StudentModule {
}
