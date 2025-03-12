import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {OrderItemComsService} from '../../services/communication/order-item-coms.service';
import {OrderItem} from '../../services/interfaces/order-item';
import {Order, OrderRequest} from '../../services/interfaces/order';
import {TotalService} from '../../services/communication/total.service';
import {OrderService} from '../../services/orders/order.service';
import {TokenService} from '../../services/auth/token.service';
import {UseStateService} from '../../services/auth/use-state.service';
import {OrderItemService} from '../../services/orders/order-item.service';
import {CartService} from '../../services/products/cart-service.service';
import {PopupService} from '../../services/utils/popup.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  orderItems: OrderItem[] = [];
  totalAmount: number | null = 0;
  order: OrderRequest | null = null;
  username:string |null = null;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private orderItemComsService: OrderItemComsService,
    private totalService: TotalService,
    private orderService: OrderService,
    private useStateService:UseStateService,
    private orderItemService:OrderItemService,
    private cartService: CartService,
    private popUpService:PopupService
  ) {
    this.checkoutForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      ciudad: ['', Validators.required],
      codigoPostal: ['', Validators.required],
      pais: ['', Validators.required],
      metodoPago: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.orderItemComsService.orderItem$.subscribe(orderItems => {
      this.orderItems = orderItems;
    })

    this.totalService.totalComs$.subscribe(total => {
      this.totalAmount = total;
    })

    this.username = this.useStateService.getUsername();

    if (this.username && this.totalAmount) {
      this.order = {
        username: this.username,
        amount: this.totalAmount,
      }
    }
  }

  realizarPago() {
    if (this.checkoutForm.valid) {
      if (this.order) {
        this.orderService.addOrder(this.order).subscribe(order => {
          this.orderItems.forEach(orderItem => {
            orderItem.orderId = order.id
            this.orderItemService.addOrderItem(orderItem).subscribe(order => {
              this.orderItemComsService.changeOrderItem([]);
              this.cartService.clearCart();
            })
          })
        })
      }
      this.popUpService.loader("Pedido realizado!","Espere un momento");

      setTimeout(() => {
        this.popUpService.close();
        this.router.navigate(['/tienda']);
      },1500)


    } else {
      this.toastr.error('Por favor, complete todos los campos', 'Error');
    }
  }
}
