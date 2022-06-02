import { Injectable } from '@angular/core';
import { State, StateContext, Action } from '@ngxs/store';
import { Product } from "../../shared/models/product.model";
import { tap } from 'rxjs/operators';
import { StoreService } from 'src/app/store/services/store.service';
import { GetProducts } from './products.actions';

@State<Product[]>({
  name: 'products',
  defaults: []
})
@Injectable({
  providedIn: 'root'
})
export class ProductsState {
  constructor(
    private storeService: StoreService
  ) {}

  @Action(GetProducts)
  getProducts(ctx: StateContext<Product[]>) {
    return this.storeService.getProducts()
      .pipe(
        tap((products) => {
          ctx.setState(products);
        })
      );
  }
}
