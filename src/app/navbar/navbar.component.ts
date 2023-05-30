import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() cartItems: any[] = [];
  appComponent: any;
  wishlist: any[] = [];
  constructor(private wishlistService: WishlistService) {}

get wishlistCount() {
  return this.wishlistService.getWishlistCount();
}

  toggleCart() {
    this.appComponent.toggleCart();
  }

  
   
  }


