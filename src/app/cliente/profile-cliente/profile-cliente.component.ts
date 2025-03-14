import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {Product} from '../../services/interfaces/product';
import {PasswordChange, UserInfo} from '../../services/interfaces/auth';
import {ToastrService} from 'ngx-toastr';
import {ProductService} from '../../services/products/product.service';
import {UseStateService} from '../../services/auth/use-state.service';
import {CredentialsService} from '../../services/auth/credentials.service';
import {PopupService} from '../../services/utils/popup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-cliente',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './profile-cliente.component.html',
  styleUrl: './profile-cliente.component.scss'
})
export class ProfileClienteComponent implements OnInit {
  products : Product[] = [];
  user: UserInfo | any;




  constructor(private toastr: ToastrService,
              private productService: ProductService,
              private useStateService:UseStateService,
              private credentialsService:CredentialsService,
              private popUpService: PopupService) {}

  ngOnInit(){
    if (this.useStateService.getUsername() != null) {
      this.productService.getBySeller(<string>this.useStateService.getUsername()).subscribe(products => {
        this.products = products as Product[];
      })
    }
    this.credentialsService.getUserInfo(<string>this.useStateService.getUsername()).subscribe({
      next: (data) => {
        this.user = data as UserInfo;
        this.user.roleName = data.role;
        this.user.createdAt = data.createdAt.split('T')[0];
        console.log(this.user);

      },
      error: (error) => {
        console.log(error);
      }
    })

  }

  changePassword(){
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
          next: (data) => {
            console.log(data)
            this.toastr.success("Contraseña cambiada","Exito!")
          },
          error: (error) => {
            this.popUpService.showMessage("Ups, ha ocurrido un error!", '', "error");
            console.log(error);
          }
        })
      }

    })
  }

}
