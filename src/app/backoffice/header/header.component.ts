import {Component, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {TabNotificationComponent} from '../tabs/tab-notification/tab-notification.component';
import {TabUserComponent} from '../tabs/tab-user/tab-user.component';
import {TabDashboardComponent} from '../tabs/tab-dashboard/tab-dashboard.component';
import {SidebarStatusService} from '../../services/status/sidebar-status.service';
import {AppSettingsComponent} from '../tabs/app-settings/app-settings.component';


@Component({
  selector: 'app-header',
  imports: [
    NgIf,
    NgOptimizedImage,
    TabNotificationComponent,
    TabUserComponent,
    TabDashboardComponent,
    AppSettingsComponent
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isActive : boolean = true;
  isActiveItems : any = {
    isActiveNotification: false,
    isActiveUser: false,
    isActiveDashboard : false,
    isActiveSettings: false
  }

  constructor(private sidebarStatusService: SidebarStatusService) {
  }



  toggleLogo(){
    this.isActive = !this.isActive;
    this.sidebarStatusService.changeStatus(this.isActive);
  }

  toggleItem(option:string){
    if (this.isActiveItems[option]){
      this.isActiveItems[option] = false;
    } else {
      Object.keys(this.isActiveItems).forEach(key => {
        this.isActiveItems[key] = false;

      })
      this.isActiveItems[option] = true;
    }
  }


}
