import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Input() isList = true;
  @Input() isDialog = false;
  @Output() goToDetail: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  onGoToDetail(): void {
    this.goToDetail.emit(this.product);
  }
}
