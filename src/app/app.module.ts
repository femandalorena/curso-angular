import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FernandaComponent } from './fernanda/fernanda.component';
import { LorenaComponent } from './lorena/lorena.component';

@NgModule({
  declarations: [
    AppComponent,
    FernandaComponent,
    LorenaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }