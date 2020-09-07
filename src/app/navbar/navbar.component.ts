import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isLoggedIn: boolean;

  constructor(
    private route: Router,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  public toggleTheme(val) {
    if (val) {
      document.documentElement.style.setProperty('--theme-header', val.checked ? '#ffffff' : '#000000');
      document.documentElement.style.setProperty('--theme-body', val.checked ? '#ffffff' : '#a9a9a9');
      document.documentElement.style.setProperty('--theme-text', val.checked ? '#000000' : '#ffffff');
      document.documentElement.style.setProperty('--theme-box-shadow', !val.checked ? 'rgb(212 212 212 / 98%) 2px 2px 7px' : 'rgb(136, 136, 136) 2px 2px 7px');
    }
  }
  public goToRouteAdd(path: string): void {
    this.route.navigate([`../books/${path}`])
  }
  private checkLoginStatus() {
    this.appService.loginTrigger.subscribe((status: boolean) => {
      console.log("status ", status);
      this.isLoggedIn = status;
    });
    this.isLoggedIn = this.appService.isUserLoggedIn();
  }
  logoutSession() {
    this.appService.logoutCurrentUser();
    this.route.navigate(['../books/all'])
  }
}
