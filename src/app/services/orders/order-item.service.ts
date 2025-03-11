import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {enviroment} from '../../../enviroments/enviroment';
import {OrderItem} from '../interfaces/order-item';


@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  constructor(private http: HttpClient) { }

  getAllOrderItems() {
    return this.http.get(`${enviroment.apiUrl}/order-items`);
  }

  addOrderItem(item: OrderItem) {
    return this.http.post(`${enviroment.apiUrl}/order-items/add`, item);
  }
}
