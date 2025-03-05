import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CredentialsService} from '../../services/auth/credentials.service';
import {UserInterface} from '../../services/interfaces/auth';
import {TokenService} from '../../services/auth/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registro',
    imports: [
        FormsModule,
        ReactiveFormsModule,
    ],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private credentialsService: CredentialsService,private tokenService: TokenService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', [Validators.required]],
      address: ['', [Validators.required]],
      password: ['', [Validators.required]],
      roleName: ['', [Validators.required]],
      terms: ['', [Validators.required]]
    });
  }


  submit() {
    if (this.registerForm.invalid) {
      return;
    }

    this.credentialsService.register(this.registerForm.value as UserInterface).subscribe({
      next: (data:UserInterface) => {
        this.credentialsService.login(this.registerForm.value as UserInterface).subscribe({
          next: (data) => {
            this.tokenService.saveTokens(data.token,"dfdjifefieowffwief")
            this.router.navigate(['/app/control-panel']);
          }
        })
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
