import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {OrderItem} from '../interfaces/order-item';

@Injectable({
  providedIn: 'root'
})
export class OrderItemComsService {
  orderItems: OrderItem[] = [];
  orderItemComs: BehaviorSubject<OrderItem[]> = new BehaviorSubject<OrderItem[]>([]);
  orderItem$ = this.orderItemComs.asObservable();

  constructor() {
    const storedItems = localStorage.getItem('orderItems');
    if (storedItems) {
      this.orderItems = JSON.parse(storedItems);
      this.orderItemComs.next(this.orderItems);
    }
  }

  getOrderItems() {
    return this.orderItem$;
  }

  changeOrderItem(orderItems: OrderItem[]) {
    this.orderItems = orderItems;
    this.orderItemComs.next(this.orderItems)
    this.saveInLocalStorage()
  }

  saveInLocalStorage() {
    sessionStorage.setItem('orderItems', JSON.stringify(this.orderItems));
  }
}
