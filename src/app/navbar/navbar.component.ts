import { AppService } from './../app.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUser } from './../register/register.domain';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isLoggedIn: boolean;
  @ViewChild('checkIn') public slider: ElementRef<HTMLInputElement>;

  constructor(
    private route: Router,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  public toggleTheme(val) {
    if (val) {
      this.setTheme(val.checked);
      this.isLoggedIn ? this.saveThemeForUser(val.checked) : '';
    }
  }

  private setTheme(isLight: boolean) {
    document.documentElement.style.setProperty('--theme-header', isLight ? '#ffffff' : '#000000');
    document.documentElement.style.setProperty('--theme-body', isLight ? '#ffffff' : '#a9a9a9');
    document.documentElement.style.setProperty('--theme-text', isLight ? '#000000' : '#ffffff');
    document.documentElement.style.setProperty('--theme-box-shadow', !isLight ? 'rgb(212 212 212 / 98%) 2px 2px 7px' : 'rgb(136, 136, 136) 2px 2px 7px');
  }

  private saveThemeForUser(isLight: boolean) {
    this.appService.saveThemeForUser(isLight).subscribe((result: AuthUser) => {
      this.appService.storeLoginUser(result);
    })
  }
  public goToRouteAdd(path: string): void {
    this.route.navigate([`../books/${path}`])
  }

  private checkLoginStatus() {
    this.appService.loginTrigger.subscribe((status: boolean) => {
      this.isLoggedIn = status;
      if (this.slider && this.isLoggedIn) {
        this.setSliderAndTheme();
      }
    });
    this.isLoggedIn = this.appService.isUserLoggedIn();
    if (this.slider && this.isLoggedIn) {
      this.setSliderAndTheme();
    }
  }

  private setSliderAndTheme() {
    const userTheme = this.appService.getLoginUser().isLightTheme;
    this.setTheme(userTheme);
    this.slider.nativeElement.checked = userTheme;
  }
  logoutSession() {
    this.appService.logoutCurrentUser();
    this.route.navigate(['../books/all'])
    this.isLoggedIn = false;
    this.setTheme(this.isLoggedIn);
    this.slider.nativeElement.checked = false;
  }

}
