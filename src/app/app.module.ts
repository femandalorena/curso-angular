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
import { HomeComponent } from './componets/home/home.component';
import { AboutComponent } from './componets/about/about.component';
import { AdminComponent } from './componets/admin/admin.component';
import { AppRoutingModule } from './app.routing.module';
import { Home1Component } from './componets/home1/home1.component';
import { Home2Component } from './componets/home2/home2.component';
import { User2Component } from './user2/user2.component';

@NgModule({
  declarations: [
    AppComponent,
    LorenaComponent, 
    TestPipe,
    ExpoPipe, 
    PurePipe,
    ImpurePipe,
    NgColorDirective,
    AnimalsComponent,
     HomeComponent,
    AboutComponent,
    AdminComponent,
    Home1Component,
    Home2Component,
    User2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonModule,
     ProductModule,
     AdminModule,
     UserModule, 
     AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }