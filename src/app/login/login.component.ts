import { AppService } from './../app.service';
import { AuthUser } from './../register/register.domain';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private appService: AppService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.createForm();
  }

  private createForm() {
    return this.fb.group({
      userName: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    })
  }

  checkUserExistance() {
    console.log("this.loginForm.value ", this.loginForm.value);
    if (this.loginForm.valid) {
      this.loginService.checkLoginUser(this.loginForm.value).subscribe((res: AuthUser[]) => {
        console.log("res ", res);
        if (res && res.length > 0) {
          alert('Logged In Successfully');
          delete res[0].password;
          this.appService.storeLoginUser(res[0]);
          this.loginForm.reset();
          this.router.navigate(['./books/list']);
          return;
        }
        alert('Username or password invalid');
      }, err => alert(err))
    }
  }
}
