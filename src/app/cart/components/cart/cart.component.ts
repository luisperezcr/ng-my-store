import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Product } from '../../../shared/models/product.model';
import { AddProductToCart, GetCart, RemoveProductFromCart, ResetCart } from '../../../state/cart/cart.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cart } from '../../../shared/models/cart.model';
import { Checkout } from '../../../shared/models/checkout.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Select() cart$!: Observable<Cart>;
  isCheckoutComplete = false;
  checkoutData!: Checkout;

  constructor(
    private state: Store,
    private matSnackBar: MatSnackBar,
    private route: Router
  ){}

  ngOnInit(): void {
    this.state.dispatch(new GetCart());
  }

  onAddItem(quantity: number, product: Product): void {
    this.state.dispatch(new AddProductToCart(product, quantity));
    this.matSnackBar.open('Item added to cart', 'Close', { duration: 3000 });
  }

  onRemoveFromCart(quantity: number, product: Product): void {
    this.state.dispatch(new RemoveProductFromCart(product, quantity));
    this.matSnackBar.open('Item removed from cart', 'Close', { duration: 3000 });
  }

  onCheckoutComplete(checkoutData: Checkout): void {
    this.isCheckoutComplete = true;
    this.checkoutData = checkoutData;
  }

  backToStore(): void {
    this.state.dispatch(new ResetCart());
    this.route.navigate(['/store/products']);
  }
}
