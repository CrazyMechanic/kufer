import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

const routes: Routes = [
  {
    path: 'catalog',
    component: HomeComponent,
  },
  {
    path: 'catalog/:id',
    component: ProductCardComponent,
  },
  {
    path: '',
    redirectTo: 'catalog',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
