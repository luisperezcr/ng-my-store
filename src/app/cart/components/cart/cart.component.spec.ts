import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddProductToCart, RemoveProductFromCart } from 'src/app/state/cart/cart.actions';
import { CartState } from 'src/app/state/cart/cart.state';
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let store: Store;
  let dispatchSpy: jasmine.Spy;
  const product = {
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
        NoopAnimationsModule,
        NgxsModule.forRoot([CartState]),
        RouterTestingModule
      ],
      declarations: [
        CartComponent
      ],
      providers: [Store]
    })
    .compileComponents();

    store = TestBed.inject(Store);
    store.reset({
      ...store.snapshot,
      products: [
        product
      ],
      total: 9.99
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    dispatchSpy = spyOn(store, 'dispatch');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add item to cart', () => {
    component.onAddItem(2, product);
    expect(dispatchSpy).toHaveBeenCalledWith(new AddProductToCart(product, 2));
  });

  it('should remove item from cart', () => {
    component.onRemoveFromCart(1, product);
    expect(dispatchSpy).toHaveBeenCalledWith(new RemoveProductFromCart(product, 1));
  });
});
