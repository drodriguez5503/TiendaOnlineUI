import { Component, OnInit } from '@angular/core';
import { Product } from '../../services/interfaces/product';
import { ToastrService } from 'ngx-toastr';
import {CartService} from '../../services/products/cart-service.service';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {OrderItem} from '../../services/interfaces/order-item';
import {OrderItemComsService} from '../../services/communication/order-item-coms.service';
import {CheckoutComponent} from '../checkout/checkout.component';
import {TokenService} from '../../services/auth/token.service';
import {PopupService} from '../../services/utils/popup.service';
import {TotalService} from '../../services/communication/total.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  imports: [
    NgForOf,
    FormsModule,
    NgIf,
    CheckoutComponent
  ],
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  cartItems: OrderItem[] = [];
  subtotal: number = 0;
  total: number = 0;
  orderActive: boolean = false;

  constructor(private cartService: CartService, private toastr: ToastrService,
              private orderItemComsService: OrderItemComsService,
              private tokenService: TokenService,
              private popUpService: PopupService,
              private totalService: TotalService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(products => {
      console.log(products);
      this.cart = products;
      this.cartItems = []
      this.cart.forEach(product => {
        let item = {
          orderId: null,
          productId: product.id,
          quantity: 1
        }
        this.cartItems.push(item as OrderItem)
      })
      this.orderItemComsService.changeOrderItem(this.cartItems);
    });

    this.calcTotal()

  }

  calcTotal() {
    let totalTemp = 0
    this.cart.forEach(product => {
      this.cartItems.forEach(item => {
        if (item.productId === product.id) {
          totalTemp += product.price*item.quantity;
        }
      })
    })
    this.subtotal = totalTemp;
    this.total = this.subtotal;

  }

  updateQuantity(productoId: number, cantidad: number) {
    this.cartItems.forEach(item => {
      if (item.productId == productoId) {
        item.quantity = cantidad;
      }
    })
    this.calcTotal();
  }

  removeProduct(index: number, productoId: number) {
    this.cart = this.cart.filter(product => product.id !== productoId);
    this.cartItems = this.cartItems.filter(item => item.productId !== productoId);
    this.calcTotal();
    this.cartService.removeFromCart(index)
    this.toastr.success('Producto eliminado del carrito', 'Éxito');
  }

  checkout() {
    this.toastr.info('Redirigiendo al checkout...', 'Información',{
      timeOut: 1000,
    });

    this.totalService.changeTotal(this.total);
    this.orderActive = true;
  }

  closeCheckout(): void {
    this.orderActive = false;
  }

  isUserLoggedIn() {
    let token = this.tokenService.getAccessToken();

    if (token) {
      return true;
    } else {
      this.orderActive = false;
      this.popUpService.showMessage(
        "Error",
        "Por favor inicie sesión para finalizar el pedido",
        "error");
      return false;
    }
  }
}
