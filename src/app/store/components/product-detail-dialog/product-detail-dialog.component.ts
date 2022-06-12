import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../../shared/models/product.model';

interface DialogData {
  product: Product;
}

@Component({
  selector: 'app-product-detail-dialog',
  templateUrl: './product-detail-dialog.component.html',
  styleUrls: ['./product-detail-dialog.component.scss']
})
export class ProductDetailDialogComponent implements OnInit {
  public product!: Product;
  public quantity = '1';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialogRef: MatDialogRef<ProductDetailDialogComponent>
  ) { }

  ngOnInit(): void {
    this.product = this.data.product;
  }

  onAdd(quantity: number): void {
    this.dialogRef.close(quantity);
  }
}
