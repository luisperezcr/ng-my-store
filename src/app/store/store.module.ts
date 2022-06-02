import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './components/store/store.component';
import { StoreRoutingModule } from './store-routing.module';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductDetailDialogComponent } from './components/product-detail-dialog/product-detail-dialog.component';

// Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatSelectModule,
  MatDialogModule
];
@NgModule({
  declarations: [
    StoreComponent,
    ProductsListComponent,
    ProductItemComponent,
    ProductDetailDialogComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    materialModules,
    FormsModule,
    FlexLayoutModule
  ]
})
export class StoreModule { }
