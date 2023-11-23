import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  searchWord:BehaviorSubject<string> = new BehaviorSubject<string>('')
  cartCount:BehaviorSubject<number> = new BehaviorSubject<number>(0)
  cartItems: { id: number, description: string, price: number, title: number }[] = [];
  baseUrl = "https://fakestoreapi.com";
  constructor(private HttpService: HttpClient) { }

  getAllCategories() {
    return this.HttpService.get(`${this.baseUrl}/products/categories`);
  }
  getAllProducts() {
    return this.HttpService.get(`${this.baseUrl}/products`);
  }
  getProductById(id:any) {
    return this.HttpService.get(`${this.baseUrl}/products/${id}`);
  }

}
