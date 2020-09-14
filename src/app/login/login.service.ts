import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { LoginCredentials } from './login.domain';
import { AuthUser } from './../register/register.domain';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) { }

  checkLoginUser(userData: LoginCredentials): Observable<AuthUser[]> {
    return this.httpClient.get<AuthUser[]>('http://localhost:3000/authUsers',
      {
        params: new HttpParams().
          set('userName', userData.userName).
          set('password', userData.password)
      })
  }
}
