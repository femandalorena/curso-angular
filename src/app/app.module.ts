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
import { PurePipe } from './pipes/pure.pipe';
import { ImpurePipe } from './pipes/impure.pipe';
import { NgColorDirective } from './directives/ng-color.directive';
import { AnimalsComponent } from './animals.component';
import { AppRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LorenaComponent, 
    TestPipe,
    ExpoPipe, 
    PurePipe,
    ImpurePipe,
    NgColorDirective,
    AnimalsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonModule,
     ProductModule,
     AdminModule,
     UserModule, 
     AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }