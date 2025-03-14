import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  showMessage(
    title:string,
    msg: string,
    icon: "success" | "warning" | "info" | "error" | "question" = "info"): void {
      Swal.fire({
        title: title,
        text: msg,
        icon: icon,
        confirmButtonText: "Cerrar notificación"
      })
  }

  loader(title:string = "Cargando...", message:string=''): void {
    Swal.fire({
      title: title,
      text: message,
      allowEscapeKey: false,
      didOpen(){
        Swal.showLoading()
      }
    })
  }

  async showConfirmation(
    title:string,
    message:string,
    confirmButtonText:string="Aceptar",
    cancelButtonText:string="Cancelar",
  ): Promise<boolean> {

    const result = await Swal.fire({
      title: title,
      text: message,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
    })

    return result.isConfirmed;

  }

  close() {
    Swal.close();
  }
}
