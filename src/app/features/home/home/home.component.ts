import { ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from '../../../core/services/home.service';
import { Product } from '../Models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products: Product[] = [];

  constructor(private HomeService: HomeService) {}
  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this.HomeService.getAllProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
      },
      (error: Error) => {}
    );
  }
}
