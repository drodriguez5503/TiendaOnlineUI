import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdCommunicationService {

  productComs: BehaviorSubject<number|null> = new BehaviorSubject<number|null>(null);
  productComs$ = this.productComs.asObservable();

  constructor() { }

  changeProduct(productComs:number|null) {
    this.productComs.next(productComs);
    this.setProductId(productComs);
  }

  setProductId(productId:number|null) {
    sessionStorage.setItem('prodId',JSON.stringify(productId));
  }
}
