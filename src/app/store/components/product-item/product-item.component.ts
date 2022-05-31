import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  public quantity = "1";

  @Input() product!: Product;
  @Output() addItem: EventEmitter<{ product: Product, quantity: number}> = new EventEmitter();

  constructor() { }

  onAdd(): void {
    this.addItem.emit({ product: this.product, quantity: Number(this.quantity) });
    this.quantity = "1";
  }
}
