import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveDetailsService {
  activeDetails: BehaviorSubject<boolean|null> = new BehaviorSubject<boolean | null>(null);
  activeDetails$ = this.activeDetails.asObservable();

  constructor() { }

  changeActiveDetails() {
    this.activeDetails.next(!this.activeDetails);
  }
}
