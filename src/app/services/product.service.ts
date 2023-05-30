import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProductsByCategory(category: string): any[] {
    throw new Error('Method not implemented.');
  }
  addToCart(product: any) {
    throw new Error('Method not implemented.');
  }
  // Define your methods and properties here
  // ...
}
