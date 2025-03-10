import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {enviroment} from '../../../enviroments/enviroment';
import {ProductRequest} from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(`${enviroment.apiUrl}/products`);
  }

  getBySeller(sellerId: number) {
    return this.http.get(`${enviroment.apiUrl}/products/user?id=${sellerId}`);
  }

  getProductById(id: number) {
    return this.http.get(`${enviroment.apiUrl}/products/id?id=${id}`);
  }

  addProduct(product: ProductRequest) {
    return this.http.post(`${enviroment.apiUrl}/products/add`, product);
  }

  updateProduct(property:any, productId: number) {
    return this.http.patch(`${enviroment.apiUrl}/products/update?id=${productId}`, property);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${enviroment.apiUrl}/products/delete?id=${id}`);
  }
}
