import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LorenaComponent } from './lorena/lorena.component';
import { PersonModule } from './person.module';

@NgModule({
  declarations: [
    AppComponent,
    LorenaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }