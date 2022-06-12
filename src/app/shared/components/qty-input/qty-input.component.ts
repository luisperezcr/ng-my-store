import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-qty-input',
  templateUrl: './qty-input.component.html',
  styleUrls: ['./qty-input.component.scss']
})
export class QtyInputComponent {
  public qty = '1';

  @Output() addToCart: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  onAdd(): void {
    this.addToCart.emit(+this.qty);
    this.qty = '1';
  }
}
