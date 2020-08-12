import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:[CommonModule],
  declarations: [PersonComponent],
  exports: [PersonComponent]
})
export class PersonModule{}