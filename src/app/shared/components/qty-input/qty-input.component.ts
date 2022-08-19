import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-qty-input',
  templateUrl: './qty-input.component.html',
  styleUrls: ['./qty-input.component.scss']
})
export class QtyInputComponent {
  public qty = '1';

  @Output() addToCart: EventEmitter<number> = new EventEmitter<number>();
  @Output() removeFromCart: EventEmitter<number> = new EventEmitter<number>();
  @Input() isCart = true;
  @Input() product!: Product;

  constructor() { }

  onAdd(): void {
    this.addToCart.emit(+this.qty);
    this.qty = '1';
  }

  onRemove(): void {
    this.removeFromCart.emit(+this.qty);
    this.qty = '1';
  }

  diabledRemoveButton(): boolean {
    if (this.product.quantity) {
      return +this.qty > +this.product.quantity;
    }
    return false;
  }
}
