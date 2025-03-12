import {Component} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import Swal from 'sweetalert2';
import {ToastrService} from 'ngx-toastr';
import {Product} from '../../services/interfaces/product';

@Component({
  selector: 'app-profile',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  products : Product[] = [];

  constructor(private toastr: ToastrService) {}

  addProduct() {
    Swal.fire({
      title: 'Agregar Producto',
      html: `<input id="productName" class="swal2-input" placeholder="Nombre del Producto">
             <input id="productPrice" type="number" class="swal2-input" placeholder="Precio">`,
      showCancelButton: true,
      confirmButtonText: 'Agregar',
      preConfirm: () => {
        const name = (document.getElementById('productName') as HTMLInputElement).value;
        const price = +(document.getElementById('productPrice') as HTMLInputElement).value;
        if (!name || !price) {
          Swal.showValidationMessage('Ambos campos son obligatorios');
        }
        return { name, price };
      }
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        this.products.push(result.value);
        this.toastr.success('Producto agregado con éxito', 'Éxito');
      }
    });
  }

  removeProduct(index: number) {
    Swal.fire({
      title: '¿Eliminar producto?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.products.splice(index, 1);
        this.toastr.info('Producto eliminado', 'Eliminado');
      }
    });
  }
}
