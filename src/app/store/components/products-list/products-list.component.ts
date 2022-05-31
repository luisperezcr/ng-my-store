import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public products: Product[] = [];

  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.storeService.getProducts()
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }
}
