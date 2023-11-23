import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../../../core/services/category.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  id: any;
  item: any;

  constructor(
    private _activedRoute: ActivatedRoute,
    private router: Router,
    private HomeService: HomeService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.id = this._activedRoute.snapshot.params['id'];
    this.getProductById();
  }

  getProductById() {
    this.HomeService.getProductById(this.id).subscribe(
      (response: any) => {
        this.item = response;
      },
      (error: Error) => {
        // this.alertifyService.error('technical error ');
      }
    );
  }
  quantity = 1;

  incrementQuantity() {
    // Increment the value of the quantity variable
    this.quantity++;
  }

  decrementQuantity() {
    // Decrement the value of the quantity variable, but not below 1
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  addToCart(item: any) {
    // Check if the item already exists in the cart
    const existingItem = this.HomeService.cartItems.find(
      (cartItem: any) => cartItem.id === item.id
    );
    if (existingItem) {
      // If the item already exists, update its quantity and price
      this._snackBar.open('already exist','x');
    } else {
      // If the item doesn't exist, add it to the cart
      this.HomeService.cartItems.push(item);
      this._snackBar.open('added susseccfully','x');
    }
    console.log(
      this.HomeService.cartItems,
      this.HomeService.cartItems.length
    );
    this.HomeService.cartCount.next(
      this.HomeService.cartItems.length
    );
  }
}
