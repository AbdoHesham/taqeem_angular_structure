import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
// import { Product } from 'src/app/features/home/Models/product';
@Injectable({
  providedIn: 'root'
})
export class InfoEvaluationService {
  baseUrl = "https://fakestoreapi.com";
  constructor(private HttpService: HttpClient) { }


  getAllProducts() : Observable <any[]> {
    return this.HttpService.get<any[]>(`${this.baseUrl}/products`);
  }
  getProductById(id:number) : Observable <any>  {
    return this.HttpService.get<any>(`${this.baseUrl}/products/${id}`);
  }

}

