import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CartComponent} from './cart/cart.component';
import {ConfirmationComponent} from './confirmation/confirmation.component';
import {ProductItemComponent} from './product-item/product-item.component';
import {ProductItemDetailComponent} from './product-item-detail/product-item-detail.component';
import {ProductListComponent} from './product-list/product-list.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent }
  , { path: 'confirmation', component: ConfirmationComponent }
  , { path: 'product-item', component: ProductItemComponent }
  , { path: 'product-item-detail', component: ProductItemDetailComponent }
  , { path: 'product-list', component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
