import {Component, OnInit} from '@angular/core';
import {ProdCommunicationService} from '../../services/communication/prod-communication.service';
import {ProductService} from '../../services/products/product.service';
import {Product} from '../../services/interfaces/product';
import {NgOptimizedImage} from '@angular/common';

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

  constructor(private prodCommunicationService: ProdCommunicationService, private productService: ProductService,) {
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

}
