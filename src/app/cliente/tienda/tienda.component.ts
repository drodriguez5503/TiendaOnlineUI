import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { ProductService } from '../../services/products/product.service';
import { Product } from '../../services/interfaces/product';
import {NgClass, NgForOf, NgIf, NgOptimizedImage, NgStyle} from '@angular/common';
import {ProdCommunicationService} from '../../services/communication/prod-communication.service';
import {ProductDetailsComponent} from '../product-details/product-details.component';
import {ActiveDetailsService} from '../../services/communication/active-details.service';


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
  prodDetails: boolean | null = false;


  @ViewChild('productList', { static: false }) productList!: ElementRef;
  @ViewChild('productList2', { static: false }) productList2!: ElementRef;

  constructor(private productService: ProductService,
              private prodCommunication: ProdCommunicationService,
              private activeDetailsService: ActiveDetailsService,) { }

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

  closeDetails(): void {
    this.prodDetails = false;
  }

  scrollLeft(listprod:HTMLElement): void {
    listprod.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight(listprod: HTMLElement): void {
    listprod.scrollBy({ left: 200, behavior: 'smooth' });
  }

  scrollToProducts() {
    document.getElementById("productCarousel")?.scrollIntoView({ behavior: "smooth" });
  }



}
