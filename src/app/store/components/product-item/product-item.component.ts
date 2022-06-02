import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  public quantity = "1";

  @Input() product!: Product;
  @Output() addItem: EventEmitter<{ product: Product, quantity: number}> = new EventEmitter();
  @Output() showDetail: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  onAdd(): void {
    this.addItem.emit({ product: this.product, quantity: Number(this.quantity) });
    this.quantity = "1";
  }

  onShowDetail(): void {
    this.showDetail.emit(this.product);
  }
}
