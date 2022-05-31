import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './components/store/store.component';
import { StoreRoutingModule } from './store-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProductsListComponent } from './components/products-list/products-list.component';

const materialModules = [
  MatToolbarModule
];
@NgModule({
  declarations: [
    StoreComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    materialModules
  ]
})
export class StoreModule { }
