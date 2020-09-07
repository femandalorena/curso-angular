import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { ProviderComponent } from './components/provider/provider.component';

@NgModule({
  declarations: [
    AppComponent,
    ProviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
