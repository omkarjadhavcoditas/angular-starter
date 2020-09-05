import { AuthUser } from './../register/register.domain';
import { LoginCredentials } from './login.domain';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
