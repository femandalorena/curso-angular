import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './componets/home/home.component';
import {AdminComponent} from './componets/admin/admin.component';
import {AboutComponent} from './componets/about/about.component';
import {Home1Component} from './componets/home1/home1.component';
import {Home2Component} from './componets/home2/home2.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path: 'home1', component: Home1Component},
      {path: 'home2', component: Home2Component}
    ]
  },
  {path: 'admin', component: AdminComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
