import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  category: string = '';
  wishlist: any[] = [];
  wishlistCount: number = 0;

  products: any[] = [
    { name: 'אוריגינל גי סי (Original GC)', price: '179-279 ש"ח'},
    { name: 'אור יקרות (Or Yekarot)', price: '100 - 269 ש"ח' },
    { name: 'דרגונפליי (Dragonfly)', price: '150-249 ש"ח' },
    { name: 'צבעוני כתום (Orange Tulip)', price: '179- 299 ש"ח' },
  ];

  // constructor(
  //   private route: ActivatedRoute,
  //   private productService: ProductService
  // ) {}

  // ngOnInit() {
  //   this.route.params.subscribe(params => {
  //     this.category = params['category'];
  //     this.products = this.productService.getProductsByCategory(this.category);
  //   });
  // }
  constructor(private wishlistService: WishlistService) {}

  addToWishlist(product: any) {
    this.wishlistService.addToWishlist(product);
  }
 
}  