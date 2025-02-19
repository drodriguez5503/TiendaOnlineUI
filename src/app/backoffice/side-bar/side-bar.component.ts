import {Component, OnInit} from '@angular/core';
import {SidebarStatusService} from '../../services/status/sidebar-status.service';
import {NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-side-bar',
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './side-bar.component.html',
  standalone: true,
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent implements OnInit{
  protected isActiveSidebar: boolean = true;

  constructor(private sideBarStatus: SidebarStatusService) {
  }

  ngOnInit(): void {
    this.sideBarStatus.$sideBarStatus.subscribe((data) => {
      this.isActiveSidebar = data
    })
  }

}
