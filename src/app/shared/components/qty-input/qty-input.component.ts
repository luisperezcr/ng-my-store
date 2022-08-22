import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-qty-input',
  templateUrl: './qty-input.component.html',
  styleUrls: ['./qty-input.component.scss']
})
export class QtyInputComponent {
  public qty = '1';
  public disabledRemoveButton = false;

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

  checkItemsInCart(): void {
    if (this.product.quantity) {
      this.disabledRemoveButton = +this.qty > +this.product.quantity;
    }
  }
}
