import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../../../core/services/home.service';
import { Product } from '../Models/product';

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
    private HomeService: HomeService
  ) {}

  ngOnInit(): void {
    this.id = this._activedRoute.snapshot.params['id'];
    this.getProductById();
  }

  getProductById() {
    this.HomeService.getProductById(this.id).subscribe(
      (response: Product) => {
        this.item = response;
      },
      (error: Error) => {}
    );
  }
}
