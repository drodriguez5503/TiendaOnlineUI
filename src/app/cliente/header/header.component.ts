import { Component } from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {LoginComponent} from '../login/login.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
