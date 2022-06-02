import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../../interfaces/product.interface';
import { StoreService } from '../../services/store.service';
import { ProductDetailDialogComponent } from '../product-detail-dialog/product-detail-dialog.component';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetProducts } from 'src/app/state/products/products.actions';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public products: Product[] = [];
  @Select() products$!: Observable<Product[]>;

  constructor(
    private storeService: StoreService,
    private matSnackBar: MatSnackBar,
    private matDialog: MatDialog,
    private state: Store
  ) { }

  ngOnInit(): void {
    this.state.dispatch(new GetProducts());
  }

  onAddItem(data: { product: Product, quantity: number }): void {
    this.storeService.addProductToCart(data.product, data.quantity);
    this.matSnackBar.open('Item added to cart', 'Close', { duration: 3000 });
  }

  openDetailDialog(product: Product): void {
    const dialogRef = this.matDialog.open(ProductDetailDialogComponent, {
      data: {
        product
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((quantity: number) => {
      if (quantity) {
        this.storeService.addProductToCart(product, quantity);
        this.matSnackBar.open('Item added to cart', 'Close', { duration: 3000 });
      }
    });
  }
}
