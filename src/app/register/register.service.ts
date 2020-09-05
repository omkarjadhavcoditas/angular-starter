import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthUser } from './register.domain';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private httpClient: HttpClient
  ) { }

  registerUser(userData: AuthUser): Observable<AuthUser> {
    return this.httpClient.post<AuthUser>('http://localhost:3000/authUsers', userData)
  }
}
