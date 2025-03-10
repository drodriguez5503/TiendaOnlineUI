import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { ProductService } from '../../services/products/product.service';
import { Product } from '../../services/interfaces/product';
import {NgClass, NgForOf, NgIf, NgOptimizedImage, NgStyle} from '@angular/common';
import {ProdCommunicationService} from '../../services/communication/prod-communication.service';
import {ProductDetailsComponent} from '../product-details/product-details.component';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  imports: [
    NgForOf,
    NgIf,
    ProductDetailsComponent,
  ],
  styleUrl: './tienda.component.scss'
})
export class TiendaComponent implements OnInit {
  products: Product[] = [];
  prodDetails: boolean = false;


  @ViewChild('productList', { static: false }) productList!: ElementRef;

  constructor(private productService: ProductService, private prodCommunication: ProdCommunicationService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: data => {
        this.products = data as Product[];
        console.log(this.products);
      }
    });
  }

  productDetails(id: number): void {
    this.prodCommunication.changeProduct(id);
    this.prodDetails = !this.prodDetails;
  }

  closeDetails(): void {
    this.prodDetails = false;
  }

  scrollLeft(): void {
    this.productList.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight(): void {
    this.productList.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }


}
