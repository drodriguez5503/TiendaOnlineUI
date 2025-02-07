import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarStatusService {

  sideBarStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  $sideBarStatus: Observable<boolean> = this.sideBarStatus.asObservable();

  constructor() { }

  changeStatus(status: boolean){
    this.sideBarStatus.next(status);
  }
}
