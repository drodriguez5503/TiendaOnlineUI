import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {ProductService} from '../../services/products/product.service';
import {UseStateService} from '../../services/auth/use-state.service';
import {Product, ProductRequest, ProductResponse} from '../../services/interfaces/product';
import {PopupService} from '../../services/utils/popup.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-product-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-product-form.component.html',
  styleUrl: './add-product-form.component.scss'
})
export class AddProductFormComponent {
  form: FormGroup;
  product: Product | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private productService: ProductService,
    private useStateService:UseStateService,
    private popUpService:PopupService,
    private router:Router
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      taxRate: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      currency: ['USD', Validators.required],
      image: ['', Validators.required]
    });
  }

  addProduct() {
    if (this.form.valid && this.useStateService.getUsername()) {
      let product: ProductRequest = {
        username : <string>this.useStateService.getUsername(),
        name : this.form.value.name,
        price : this.form.value.price,
        description : this.form.value.description,
        taxRate : this.form.value.taxRate / 100,
        currency : this.form.value.currency,
        image: this.form.value.image
      }

      this.productService.addProduct(product).subscribe({
        next:() => {
          this.popUpService.loader("Procesando el producto", "Espere un momento");

          setTimeout(() => {
            this.popUpService.close();
            this.toastr.success("Producto añadido!");
            this.router.navigate(['/app/control-panel']);
          }, 1500)
        },

        error: (error) => {
          this.popUpService.showMessage("Error", error.error,"error");
        }
      })
    } else {
      this.toastr.error('Por favor, complete todos los campos', 'Error');
    }


  }
}


