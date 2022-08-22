import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QtyInputComponent } from './components/qty-input/qty-input.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductItemComponent } from './components/product-item/product-item.component';

import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    QtyInputComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [
    QtyInputComponent,
    ProductItemComponent,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    MatToolbarModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class SharedModule { }
