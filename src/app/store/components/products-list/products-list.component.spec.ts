import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule, Store  } from '@ngxs/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddProductToCart } from 'src/app/state/cart/cart.actions';
import { ProductsState } from 'src/app/state/products/products.state';
import { ProductDetailDialogComponent } from '../product-detail-dialog/product-detail-dialog.component';
import { ProductsListComponent } from './products-list.component';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;
  let store: Store;
  let product = {
    id: 1,
    name: 'Book',
    price: 9.99,
    url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'You can read it!'
  };
  let dispatchSpy: jasmine.Spy;
  let snackBarOpenSpy: jasmine.Spy;
  let dialogOpenSpy: jasmine.Spy;
  let matSnackBar: MatSnackBar;
  let dialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        NgxsModule.forRoot([ProductsState]),
        NoopAnimationsModule
      ],
      declarations: [
        ProductsListComponent,
        ProductDetailDialogComponent
      ],
      providers: [
        Store
      ]
    })
    .compileComponents();

    matSnackBar = TestBed.inject(MatSnackBar);
    dialog = TestBed.inject(MatDialog);
    store = TestBed.inject(Store);
    store.reset({
      ...store.snapshot(),
      products: [
        product
      ]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    dispatchSpy = spyOn(store, 'dispatch');
    snackBarOpenSpy = spyOn(matSnackBar, 'open');
    dialogOpenSpy = spyOn(dialog, 'open').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch action to add item', () => {
    component.onAddItem(1, product);
    expect(dispatchSpy).toHaveBeenCalledWith(new AddProductToCart(product, 1));
    expect(snackBarOpenSpy).toHaveBeenCalled();
  });

  it('should open dialog', () => {
    component.openDetailDialog(product);
    expect(dialogOpenSpy).toHaveBeenCalled();
  });
});
