import {Component, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {LoginComponent} from '../login/login.component';
import {RouterLink} from '@angular/router';
import {TokenService} from '../../services/auth/token.service';
import {TabUserComponent} from '../../backoffice/tabs/tab-user/tab-user.component';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    RouterLink,
    NgIf,
    TabUserComponent
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  token: string | null = null;
  userActive: boolean = false;

  constructor(private tokenService: TokenService) {
  }

   ngOnInit() {
    this.token = this.tokenService.getAccessToken();
    console.log(this.token);
   }

   toggleItem() {
    this.userActive = !this.userActive;
   }

}
