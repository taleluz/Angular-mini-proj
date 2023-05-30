import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cartItems: any[] = [];

  toggleCart() {
    // Implement the logic to toggle the cart visibility here
  }
}
