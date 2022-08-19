import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Product } from '../../../shared/models/product.model';
import { AddProductToCart, GetCart, RemoveProductFromCart } from '../../../state/cart/cart.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Select() cart$!: Observable<Product[]>;

  constructor(
    private state: Store,
    private matSnackBar: MatSnackBar
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
}
