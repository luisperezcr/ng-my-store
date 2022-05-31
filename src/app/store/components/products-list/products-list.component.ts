import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private storeService: StoreService,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.storeService.getProducts()
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }

  onAddItem(data: { product: Product, quantity: number }): void {
    this.storeService.addProductToCart(data.product, data.quantity);
    this.matSnackBar.open('Item added to cart', 'Close', { duration: 3000 });
  }
}
