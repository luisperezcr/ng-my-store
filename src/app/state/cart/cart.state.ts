import { Injectable } from '@angular/core';
import { State, StateContext, Action } from '@ngxs/store';
import { Cart } from 'src/app/shared/models/cart.model';
import { Product } from '../../shared/models/product.model';
import { AddProductToCart, GetCart, GetTotal, RemoveProductFromCart } from './cart.actions';

@State<Cart>({
  name: 'cart',
  defaults: {
    products: [],
    total: 0
  }
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
  addProductToCart(ctx: StateContext<Cart>, { product, quantity }: AddProductToCart) {
    const state = ctx.getState();
    let wasModified = false;
    state.products.forEach((p) => {
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
      state.products.push({ ...product, quantity: quantity });
    }
    ctx.dispatch(GetTotal);
    return ctx.setState(state);
  }

  @Action(RemoveProductFromCart)
  removeProductFromCart(ctx: StateContext<Cart>, { product, quantity }: RemoveProductFromCart) {
    const state = ctx.getState();
    state.products.forEach((p, i) => {
      if (p.id === product.id) {
        if (p.quantity === quantity) {
          state.products.splice(i, 1);
          return;
        } else if (p.quantity) {
          p.quantity -= quantity;
        }
      }
    });
    ctx.dispatch(GetTotal);
    return ctx.setState(state);
  }

  @Action(GetTotal)
  getTotal(ctx: StateContext<Cart>) {
    const state = ctx.getState();
    let total = 0;
    state.products.forEach((product) => {
      total += product.price * Number(product.quantity);
    });
    return ctx.setState({ ...state, total });
  }
}
