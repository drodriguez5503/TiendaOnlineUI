import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {Product} from '../../services/interfaces/product';
import {ProductService} from '../../services/products/product.service';
import {UseStateService} from '../../services/auth/use-state.service';
import {CredentialsService} from '../../services/auth/credentials.service';
import {AddProductFormComponent} from '../add-product-form/add-product-form.component';
import {PasswordChange, UserInfo} from '../../services/interfaces/auth';
import {PopupService} from '../../services/utils/popup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  imports: [
    NgIf,
    NgForOf,
    AddProductFormComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  products : Product[] = [];
  user: UserInfo | any;
  productForm: boolean = false;
  infoFormActive: boolean = false;



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
    this.credentialsService.getUserInfo(<string>this.useStateService.getUsername()).subscribe({
      next: (data) => {
        this.user = data as UserInfo;
        this.user.roleName = data.role;
        this.user.createdAt = data.createdAt;
        console.log(this.user);

      },
      error: (error) => {
        console.log(error);
      }
    })

  }

  addProduct() {
    this.productForm = !this.productForm;
  }

  removeProduct(index: number, indexInArray: number) {
    this.popUpService.showConfirmation(
      "Atención!",
      "Vas a eliminar un producto, quieres continuar?",
    ).then((result) => {
      if (result) {
        console.log(result);
        this.productService.deleteProduct(index).subscribe({
          next: () => {
            this.products.splice(index, 1);
            this.toastr.success("Producto eliminado correctamente.");
          },

          error: (error) => {
            this.popUpService.showMessage("Ups, ha ocurrido un error!", error, "error")
          }
        })
      }
    })

  }

  changePassword() {
    Swal.fire({
      title: 'Cambiar Contraseña',
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="Contraseña actual" class="form-control">' +
        '<input id="swal-input2" class="swal2-input" placeholder="Nueva contraseña" type="password" class="form-control">',
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        const currentPassword = (document.getElementById('swal-input1') as HTMLInputElement).value;
        const newPassword = (document.getElementById('swal-input2') as HTMLInputElement).value;
        if (!currentPassword || !newPassword) {
          Swal.showValidationMessage(`Por favor, ingrese la contraseña actual y la nueva contraseña`);
        }
        return { currentPassword: currentPassword, newPassword: newPassword };
      }
    }).then(result => {
      if (result.isConfirmed) {
        const changePassword: PasswordChange = {
          password: result.value.currentPassword,
          newPassword: result.value.newPassword,
          username: this.user.username,
        }

        this.credentialsService.changePassword(changePassword).subscribe({
          next: () => {
            this.toastr.success("Contraseña cambiada","Exito!")
          },
          error: (error) => {
            this.popUpService.showMessage("Ups, ha ocurrido un error!", error, "error");
          }
        })
      }

    })
  }

}
