import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/features/home/Models/product';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl = "https://fakestoreapi.com";
  constructor(private HttpService: HttpClient) { }


  getAllProducts() : Observable <Product[]> {
    return this.HttpService.get<Product[]>(`${this.baseUrl}/products`);
  }
  getProductById(id:number) : Observable <Product>  {
    return this.HttpService.get<Product>(`${this.baseUrl}/products/${id}`);
  }

}
