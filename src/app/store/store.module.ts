import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './components/store/store.component';
import { StoreRoutingModule } from './store-routing.module';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductDetailDialogComponent } from './components/product-detail-dialog/product-detail-dialog.component';
import { SharedModule } from '../shared/shared.module';

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
    SharedModule
  ]
})
export class StoreModule { }
