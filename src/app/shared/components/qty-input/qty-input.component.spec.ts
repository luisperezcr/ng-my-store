import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../shared.module';

import { QtyInputComponent } from './qty-input.component';

describe('QtyInputComponent', () => {
  let component: QtyInputComponent;
  let fixture: ComponentFixture<QtyInputComponent>;
  let addToCartSpy: jasmine.Spy;
  let removeFromCartSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        NoopAnimationsModule
      ],
      declarations: [
        QtyInputComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QtyInputComponent);
    component = fixture.componentInstance;
    addToCartSpy = spyOn(component.addToCart, 'emit');
    removeFromCartSpy = spyOn(component.removeFromCart, 'emit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit action to add product to cart', () => {
    component.onAdd();
    expect(addToCartSpy).toHaveBeenCalled();
  });

  it('should emit action to remove product from cart', () => {
    component.onRemove();
    expect(removeFromCartSpy).toHaveBeenCalled();
  });
});
