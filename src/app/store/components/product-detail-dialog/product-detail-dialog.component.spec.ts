import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProductItemComponent } from 'src/app/shared/components/product-item/product-item.component';
import { QtyInputComponent } from 'src/app/shared/components/qty-input/qty-input.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { ProductDetailDialogComponent } from './product-detail-dialog.component';

describe('ProductDetailDialogComponent', () => {
  let component: ProductDetailDialogComponent;
  let fixture: ComponentFixture<ProductDetailDialogComponent>;
  const testProduct = {
    id: 1,
    name: 'Book',
    price: 9.99,
    url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'You can read it!'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        NoopAnimationsModule
      ],
      declarations: [
        ProductDetailDialogComponent,
        ProductItemComponent,
        QtyInputComponent
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { product: testProduct } },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
