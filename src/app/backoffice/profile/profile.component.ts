import {Component} from '@angular/core';
import {NgIf} from '@angular/common';
import {TabUserComponent} from '../tabs/tab-user/tab-user.component';
import {ProfileModalComponent} from '../profile-modal/profile-modal.component';

@Component({
  selector: 'app-profile',
  imports: [
    NgIf,
    TabUserComponent,
    ProfileModalComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  isSearchModalOpen = false;

  showSearchModal() {
    this.isSearchModalOpen = true;
  }

  hideSearchModal() {
      this.isSearchModalOpen = false;
  }

}
