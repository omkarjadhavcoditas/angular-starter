import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthUser } from './register/register.domain';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public loginTrigger: BehaviorSubject<boolean>;
  private readonly serverUrl = 'http://localhost:3000/authUsers';

  constructor(
    private httpClient: HttpClient
  ) {
    this.loginTrigger = new BehaviorSubject<boolean>(null);
  }

  public storeLoginUser(user: AuthUser): void {
    // delete user[0].password;
    localStorage.setItem('loginUser', JSON.stringify(user));
    this.loginTrigger.next(true);
  }

  public getLoginUser(): AuthUser {
    return JSON.parse(localStorage.getItem('loginUser'));
  }

  public logoutCurrentUser(): void {
    localStorage.clear();
    this.loginTrigger.next(false);
  }

  public isUserLoggedIn(): boolean {
    return localStorage.length > 0;
  }

  public saveThemeForUser(isDarkTheme: boolean) {
    const existingUser = this.getLoginUser();
    existingUser.isLightTheme = isDarkTheme;
    return this.httpClient.put(`${this.serverUrl}/${existingUser.id}`, existingUser)
  }
}
