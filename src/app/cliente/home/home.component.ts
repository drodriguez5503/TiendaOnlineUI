import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/products/product.service';
import {ProdCommunicationService} from '../../services/communication/prod-communication.service';
import {ActiveDetailsService} from '../../services/communication/active-details.service';
import {ToastrService} from 'ngx-toastr';
import {CartService} from '../../services/products/cart-service.service';
import {Product} from '../../services/interfaces/product';
import {NgForOf, NgIf} from '@angular/common';
import {ProductDetailsComponent} from '../product-details/product-details.component';


@Component({
  selector: 'app-home',
  imports: [
    NgForOf,
    NgIf,
    ProductDetailsComponent

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  prodDetails: boolean | null = false;

  constructor(private productService: ProductService,
              private prodCommunication: ProdCommunicationService,
              private activeDetailsService: ActiveDetailsService,
              private toastr: ToastrService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: data => {
        this.products = data as Product[];
        console.log(this.products);
      }
    });

    this.activeDetailsService.activeDetails$.subscribe(activeDetails => {
      this.prodDetails = activeDetails;
    })

  }

  productDetails(id: number): void {
    this.prodCommunication.changeProduct(id);
    this.prodDetails = !this.prodDetails;
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.toastr.success(`${product.name} añadido al carrito`, 'Producto agregado', {
      positionClass: 'toast-top-right',
      tapToDismiss: true,
      progressBar: true,
      newestOnTop: true,
      disableTimeOut: false,
      closeButton: true,
    });
  }

  closeDetails(): void {
    this.prodDetails = false;
  }


}
