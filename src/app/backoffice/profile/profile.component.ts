import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {Product} from '../../services/interfaces/product';
import {ProductService} from '../../services/products/product.service';
import {UseStateService} from '../../services/auth/use-state.service';
import {CredentialsService} from '../../services/auth/credentials.service';
import {AddProductFormComponent} from '../add-product-form/add-product-form.component';
import {UserInterface} from '../../services/interfaces/auth';
import {PopupService} from '../../services/utils/popup.service';

@Component({
  selector: 'app-profile',
  imports: [
    NgIf,
    NgForOf,
    AddProductFormComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  products : Product[] = [];
  user: UserInterface | null = null;
  productForm: boolean = false;



  constructor(private toastr: ToastrService,
              private productService: ProductService,
              private useStateService:UseStateService,
              private credentialsService:CredentialsService,
              private popUpService: PopupService) {}

  ngOnInit() {
    if (this.useStateService.getUsername() != null) {
      this.productService.getBySeller(<string>this.useStateService.getUsername()).subscribe(products => {
        this.products = products as Product[];
      })
    }
    this.credentialsService.getByUsername(<string>this.useStateService.getUsername()).subscribe(credentials => {
      this.user = credentials;
    })

  }

  addProduct() {
    this.productForm = !this.productForm;
  }

  removeProduct(index: number) {
    this.popUpService.showConfirmation(
      "Atención!",
      "Vas a eliminar un producto, quieres continuar?",
    ).then((result) => {
      if (result) {
        console.log(result);
        this.productService.deleteProduct(index).subscribe({
          next: () => {
            this.toastr.success("Producto eliminado correctamente.");
          },

          error: (error) => {
            this.popUpService.showMessage("Ups, ha ocurrido un error!", error, "error")
          }
        })
      }
    })

  }
}
