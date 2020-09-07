import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProviderComponent } from './components/provider/provider.component';

const routes: Routes = [
  {path: '', component: ProviderComponent},
  {path: 'product', loadChildren: () => import('./modules/product/product.module').then(m => m.LoginModule)},
  {path: 'client', loadChildren: () => import('./modules/client/client.module').then(m => m.PagesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
