import { Injectable } from '@angular/core';
import { State, StateContext, Action } from '@ngxs/store';
import { Product } from '../../shared/models/product.model';
import { AddProductToCart, GetCart, RemoveProductFromCart } from './cart.actions';

@State<Product[]>({
  name: 'cart',
  defaults: []
})
@Injectable({
  providedIn: 'root'
})
export class CartState {
  constructor() {}

  @Action(GetCart)
  getCart(ctx: StateContext<Product[]>) {
    const state = ctx.getState();
    return state;
  }

  @Action(AddProductToCart)
  addProductToCart(ctx: StateContext<Product[]>, { product, quantity }: AddProductToCart) {
    const state = ctx.getState();
    let wasModified = false;
    state.forEach((p) => {
      if (p.id === product.id) {
        if (p.quantity) {
          p.quantity += quantity;
        } else {
          p.quantity = quantity;
        }
        wasModified = true;
      }
    });
    if (!wasModified) {
      state.push({ ...product, quantity: quantity });
    }
    return ctx.setState(state);
  }

  @Action(RemoveProductFromCart)
  removeProductFromCart(ctx: StateContext<Product[]>, { product, quantity }: RemoveProductFromCart) {
    const state = ctx.getState();
    let wasModified = false;
    state.forEach((p, i) => {
      if (p.id === product.id) {
        if (p.quantity === quantity) {
          state.splice(i, 1);
          return;
        } else if (p.quantity) {
          p.quantity -= quantity;
        }
        wasModified = true;
      }
    });
    return ctx.setState(state);
  }
}
