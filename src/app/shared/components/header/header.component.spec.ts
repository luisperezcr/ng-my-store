import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared.module';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule,
        NoopAnimationsModule
      ],
      declarations: [
        HeaderComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have route to store', () => {
    const routes = component.routes;
    const storeRoute = routes.find((route) => route.url === 'store');
    expect(storeRoute).toBeTruthy();
  });

  it('should have route to cart', () => {
    const routes = component.routes;
    const cartRoute = routes.find((route) => route.url === 'cart');
    expect(cartRoute).toBeTruthy();
  });
});
