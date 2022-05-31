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
  @Output() addItem: EventEmitter<{ id: number, quantity: number}> = new EventEmitter();

  constructor() { }

  onAdd(): void {
    this.addItem.emit({ id: this.product.id, quantity: Number(this.quantity) })
  }
}
