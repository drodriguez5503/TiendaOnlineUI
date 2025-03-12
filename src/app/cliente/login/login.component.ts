import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {CredentialsService} from '../../services/auth/credentials.service';
import {LoginInterface} from '../../services/interfaces/auth';
import {TokenService} from '../../services/auth/token.service';
import {UseStateService} from '../../services/auth/use-state.service';
import {PopupService} from '../../services/utils/popup.service';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private credentialsService: CredentialsService,
    private router:Router,
    private tokenService: TokenService,
    private useStateService:UseStateService,
    private popUpService:PopupService) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }



  submit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.credentialsService.login(this.loginForm.value as LoginInterface).subscribe({
      next: (data) => {
        this.popUpService.loader("Cargando...", "Espere un momento");
        setTimeout(() =>{
          this.tokenService.saveTokens(data.token,"fefefifrfijogsjosdfeof");
          this.useStateService.save(data.username,data.role);
          this.popUpService.close();
          if (data.role == "CLIENT") {
            this.router.navigate(['/tienda']);
          } else {
            this.router.navigate(['/app/control-panel']);
          }
        },1500)
      },
      error: err => {
        console.log(err);
        let message
        if(err.error == "Invalid Password") {
          message = "Contraseña incorrecta"
        } else if(err.error == "User not found") {
          message = "El usuario no existe, compruebe los datos o cree una cuenta"
        } else {
          message = err.error;
        }
        this.popUpService.showMessage(
          'Ups ha ocurrido un error',
          message,
          'error'
        )
      }
    })


  }

}
