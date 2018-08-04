import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CartComponent } from './cart/cart.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   component: CartComponent
  // }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class CartModule { }
