import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCarts() {
    return this.http.get<any>(environment.pathApi + 'carts/');
  }

  getCart(userId: number) {
    return this.http.get<any>(environment.pathApi + 'carts/'+userId)
  }

}