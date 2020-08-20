import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDashboardComponent } from './Products/product-dashboard/product-dashboard.component';
import { AddProductComponent } from './Products/add-product/add-product.component';

const routes: Routes = [
  {
    path: 'add-product', component: AddProductComponent
  },
  {
    path: 'productlist', component: ProductDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
