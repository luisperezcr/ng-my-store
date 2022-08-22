import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StoreService } from './store.service';

describe('StoreService', () => {
  let service: StoreService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(StoreService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the get products method', () => {
    const testProducts = [{
      id: 1,
      name: 'Book',
      price: 9.99,
      url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'You can read it!'
    }];
    service.getProducts().subscribe((products) => {
      expect(products.length).toBe(1);
      expect(products).toEqual(testProducts);
    });
    const request = httpTestingController.expectOne('/assets/data.json');
    request.flush(testProducts);
    expect(request.request.method).toBe('GET');
  });
});
