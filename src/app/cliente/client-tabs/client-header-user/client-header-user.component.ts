import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {TokenService} from '../../../services/auth/token.service';
import {UseStateService} from '../../../services/auth/use-state.service';
import {PopupService} from '../../../services/utils/popup.service';

@Component({
  selector: 'app-client-header-user',
    imports: [
        RouterLink
    ],
  templateUrl: './client-header-user.component.html',
  styleUrl: './client-header-user.component.scss'
})
export class ClientHeaderUserComponent {

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private useStateService: UseStateService,
    private popUpService: PopupService
  ) {
  }

  closeSession() {
    this.popUpService.loader(
      "Cerrando sesión",
      "Vuelva pronto!",
    );

    this.tokenService.removeTokens();
    this.useStateService.removeSession();
    setTimeout(() => {
      this.popUpService.close();
      this.router.navigate(['/login']).then(()=> {
        window.location.reload();
      });
    },1500);

  }
}
