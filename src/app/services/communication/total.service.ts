import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TotalService {
  totalComs: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);
  totalComs$ = this.totalComs.asObservable();

  constructor() { }

  changeTotal(total: number | null): void {
    this.totalComs.next(total);
    this.setTotal(total);
  }

  setTotal(total: number | null): void {
    sessionStorage.setItem('total',JSON.stringify(total));
  }
}
