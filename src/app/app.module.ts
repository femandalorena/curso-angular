import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LorenaComponent } from './componets/lorena/lorena.component';
import { PersonModule } from './modules/person/person.module';
import { ProductModule } from './modules/product/product.module';


@NgModule({
  declarations: [
    AppComponent,
    LorenaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonModule,
     ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }