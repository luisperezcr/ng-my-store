import { Product } from "src/app/store/interfaces/product.interface";

export class GetProducts {
  static readonly type = '[Store] Get Products';

  constructor() {}
}

export class GetCart {
  static readonly type = '[Cart] Get Cart';

  constructor() {}
}

export class AddProductToCart {
  static readonly type = '[Cart] Add Product to Cart';

  constructor(public product: Product, quantity: number) {}
}

export class RemoveProductFromCart {
  static readonly type = '[Cart] Remove Product from Cart';

  constructor(public product: Product) {}
}
