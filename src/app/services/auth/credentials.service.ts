import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {enviroment} from '../../../enviroments/enviroment';
import {LoginInterface, UserInterface} from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  constructor( private http: HttpClient) {
  }

  login(credentials:LoginInterface): Observable<any> {
    return this.http.post<any>(`${enviroment.apiUrl}/users/login`,credentials)
  }

  register(userData:UserInterface): Observable<any> {
    return this.http.post<any>(`${enviroment.apiUrl}/users/register`, userData);
  }

  getByUsername(username: string): Observable<any> {
    return this.http.get(`${enviroment.apiUrl}/users/username?username=${username}`);
  }

}
