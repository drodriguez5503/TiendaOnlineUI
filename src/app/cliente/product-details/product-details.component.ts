import {Component, OnInit} from '@angular/core';
import {ProdCommunicationService} from '../../services/communication/prod-communication.service';
import {ProductService} from '../../services/products/product.service';
import {Product} from '../../services/interfaces/product';
import {NgOptimizedImage} from '@angular/common';
import {ActiveDetailsService} from '../../services/communication/active-details.service';
import {CartService} from '../../services/products/cart-service.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  prodId: number|null = null;
  product: Product | null = null;
  activeDetails: boolean | null = null;

  constructor(private prodCommunicationService: ProdCommunicationService,
              private productService: ProductService,
              private activeDetailsService: ActiveDetailsService,
              private cartService: CartService,
              private toastr: ToastrService) {
  }


  ngOnInit() {
    this.prodCommunicationService.productComs$.subscribe(id => {
      this.prodId = id;
    })

    if(this.prodId != null) {
      this.productService.getProductById(this.prodId).subscribe( {
        next: data => {
          this.product = data as Product
        },
        error: err => {
          console.log(err);
        }

      })
    }
  }

  changeDetailsState() {
    this.activeDetailsService.changeActiveDetails();
    console.log(this.activeDetails);
  }

  addToCart(product: Product| null): void {
    if(!product) {
      return;
    }

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

}
