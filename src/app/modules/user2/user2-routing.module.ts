import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {User2Component} from './user2/user2.component';
import {User21Component} from './user21/user21.component';
import {User22Component} from './user22/user22.component';

const routes: Routes = [
  {
    path: '',
    component: User2Component,
    children: [
      {path: 'user1', component: User21Component},
      {path: 'user2', component: User22Component}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class User2RoutingModule {
}