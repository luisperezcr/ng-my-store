import { Product } from "../../shared/models/product.model";

export class GetCart {
  static readonly type = '[Cart] Get Cart';

  constructor() {}
}

export class AddProductToCart {
  static readonly type = '[Cart] Add Product to Cart';

  constructor(public product: Product, public quantity: number) {}
}

export class RemoveProductFromCart {
  static readonly type = '[Cart] Remove Product from Cart';

  constructor(public product: Product, public quantity: number) {}
}
