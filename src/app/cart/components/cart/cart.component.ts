import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Product } from '../../../shared/models/product.model';
import { GetCart } from '../../../state/cart/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Select() cart$!: Observable<Product[]>;

  constructor(
    private state: Store
  ) { }

  ngOnInit(): void {
    this.state.dispatch(new GetCart());
  }
}
