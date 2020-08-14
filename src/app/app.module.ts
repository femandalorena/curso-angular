import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LorenaComponent } from './componets/lorena/lorena.component';
import { PersonModule } from './modules/person/person.module';
import { ProductModule } from './modules/product/product.module';
import { AdminModule } from './modules/admin/admin.module';
import { UserModule } from './modules/user/user.module';
import { TestPipe } from './pipes/test.pipe';
import { ExpoPipe } from './pipes/exponent.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LorenaComponent, 
    TestPipe,
    ExpoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonModule,
     ProductModule,
     AdminModule,
     UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }