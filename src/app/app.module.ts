import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AnimalModule } from './modules/animal/animal.module';
import { OwnerModule } from './modules/owner/owner.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AnimalModule,
    OwnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }