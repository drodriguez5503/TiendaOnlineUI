import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];
  cartSubject = new BehaviorSubject<Product[]>([]);
  cart$ = this.cartSubject.asObservable()

  constructor() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
      this.cartSubject.next(this.cart);
    }
  }

  getCart() {
    return this.cart$;
  }

  addToCart(product: Product) {
    this.cart.push(product);
    this.cartSubject.next(this.cart);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  removeFromCart(indexProd: number) {
    const index = indexProd;
    console.log(index)
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.cartSubject.next([...this.cart]);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }

  clearCart(): void {
    this.cartSubject.next([]);
    localStorage.removeItem('cart');
  }
}
