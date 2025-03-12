import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {enviroment} from '../../../enviroments/enviroment';
import {Order, OrderRequest} from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getAllOrders() {
    return this.http.get<Order[]>(`${enviroment.apiUrl}/orders`);
  }

  addOrder(order: OrderRequest) {
    return this.http.post<Order>(`${enviroment.apiUrl}/orders/create`, order);
  }
}
