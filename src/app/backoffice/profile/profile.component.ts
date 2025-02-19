import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {NgIf} from '@angular/common';
import {ProfileModalComponent} from '../profile-modal/profile-modal.component';
import {UserTabComponent} from '../profile-tabs/user-tab/user-tab.component';

@Component({
  selector: 'app-profile',
  imports: [
    NgIf,
    ProfileModalComponent,
    UserTabComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  ActiveUser: boolean = false;
  isSearchModalOpen = false;


  showSearchModal() {
    this.isSearchModalOpen = true;
  }

  hideSearchModal() {
      this.isSearchModalOpen = false;
  }

  toggleUser() {
    this.ActiveUser = !this.ActiveUser;
  }

}
