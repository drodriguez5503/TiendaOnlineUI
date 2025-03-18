import {Component, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {LoginComponent} from '../login/login.component';
import {RouterLink} from '@angular/router';
import {TokenService} from '../../services/auth/token.service';
import {TabUserComponent} from '../../backoffice/tabs/tab-user/tab-user.component';
import {ClientHeaderUserComponent} from '../client-tabs/client-header-user/client-header-user.component';
import {CartService} from '../../services/products/cart-service.service';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    RouterLink,
    NgIf,
    TabUserComponent,
    ClientHeaderUserComponent
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  cartItemCount: number = 0;
  token: string | null = null;
  userActive: boolean = false;

  constructor(private tokenService: TokenService,private cartService: CartService) {
  }

   ngOnInit() {
    this.token = this.tokenService.getAccessToken();
    console.log(this.token);

    this.cartService.cart$.subscribe(cart => {
      this.cartItemCount = cart.length
    })
   }

   toggleItem() {
    this.userActive = !this.userActive;
   }

}
