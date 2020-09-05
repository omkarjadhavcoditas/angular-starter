import { AuthUser } from './register/register.domain';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public loginTrigger: BehaviorSubject<boolean>;

  constructor() {
    this.loginTrigger = new BehaviorSubject<boolean>(null);
  }

  public storeLoginUser(user: AuthUser): void {
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
}
