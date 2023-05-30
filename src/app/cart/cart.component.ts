import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input()
  cartItems!: any[];
  isCartClosed: boolean | undefined;

  removeFromCart(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  updateQuantity(item: any) {
    if (item.quantity < 1) {
      item.quantity = 1;
    }
  }

  decrementQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  incrementQuantity(item: any) {
    item.quantity++;
  }

  closeCart() {
    this.isCartClosed = true;
    // Perform any necessary actions when the cart is closed
    // For example, hide the cart or perform additional logic
  }
}
