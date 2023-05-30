import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical-cannabis',
  templateUrl: './medical-cannabis.component.html',
  styleUrls: ['./medical-cannabis.component.css']
})
export class MedicalCannabisComponent {
  products: any[] = [
    { name: 'תפרחות' },
    { name: 'סאטיבה'},
    { name: 'אינדיקה' },
    { name: 'היברידי'}
  ];
  constructor(private router: Router) {}

  moreDetails(product: any) {
    this.router.navigate(['/product'], { queryParams: { count: 8 } });
  // Add the product to the cart
}
}