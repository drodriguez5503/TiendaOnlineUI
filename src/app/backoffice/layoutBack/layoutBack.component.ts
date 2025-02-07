import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from '../header/header.component';
import {SideBarComponent} from '../side-bar/side-bar.component';
import {SidebarStatusService} from '../../services/status/sidebar-status.service';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-layoutBack',
  imports: [RouterOutlet, HeaderComponent, SideBarComponent, NgClass],
  templateUrl: './layoutBack.component.html',
  standalone: true,
  styleUrl: './layoutBack.component.scss'
})
export class LayoutBackComponent implements OnInit{

  protected isActiveSidebar: boolean = true;


  constructor(private sideBarStatus: SidebarStatusService) {
  }

  ngOnInit() {
    this.sideBarStatus.$sideBarStatus.subscribe((data) => {
      this.isActiveSidebar = data;
    });
  }

}


