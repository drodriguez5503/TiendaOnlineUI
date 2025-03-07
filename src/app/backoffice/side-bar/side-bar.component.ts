import {Component, OnInit} from '@angular/core';
import {SidebarStatusService} from '../../services/status/sidebar-status.service';
import {Router, RouterLink} from '@angular/router';
import {TokenService} from '../../services/auth/token.service';
import {PopupService} from '../../services/utils/popup.service';
import {UseStateService} from '../../services/auth/use-state.service';

@Component({
  selector: 'app-side-bar',
  imports: [
    RouterLink
  ],
  templateUrl: './side-bar.component.html',
  standalone: true,
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent implements OnInit{
  protected isActiveSidebar: boolean = true;

  constructor(private sideBarStatus: SidebarStatusService,
              private tokenService: TokenService,
              private popUpService:PopupService,
              private useStateService: UseStateService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.sideBarStatus.$sideBarStatus.subscribe((data) => {
      this.isActiveSidebar = data
    })
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
      this.router.navigate(['/login']);
    },1500);

  }

}
