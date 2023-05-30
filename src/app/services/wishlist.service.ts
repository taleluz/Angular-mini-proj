import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishlist: any[] = [];

  addToWishlist(product: any) {
    this.wishlist.push(product);
  }

  getWishlistCount() {
    return this.wishlist.length;
  }
}
