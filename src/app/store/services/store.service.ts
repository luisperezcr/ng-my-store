import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public cart: Product[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/assets/data.json');
  }

  addProductToCart(product: Product, quantity: number): void {
    let wasModified = false;
    this.cart.forEach((p) => {
      if (p.id === product.id) {
        if (p.quantity) {
          p.quantity += quantity;
        } else {
          p.quantity = quantity;
        }
        wasModified = true;
      }
    });
    if (!wasModified) {
      this.cart.push({ ...product, quantity: quantity });
    }
  }
}
