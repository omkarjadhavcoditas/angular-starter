import { AuthUser } from './register.domain';
import { RegisterService } from './register.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerService: RegisterService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.createForm();
  }

  private createForm() {
    return this.fb.group({
      firstName: [null, Validators.compose([Validators.required])],
      lastName: [null, Validators.compose([Validators.required])],
      userName: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(4)])]
    })
  }
  registerUser() {
    if (this.registerForm.valid) {
      this.registerService.registerUser(this.registerForm.value).subscribe((res: AuthUser) => {
        if (res) {
          alert('User Registered Successfully');
          this.registerForm.reset();
          this.router.navigate(['./login']);
        }
      }, err => alert(err))
    } else {
      alert('Fiil form properly')
    }
    console.log("this.registerForm.value ", this.registerForm.value);
  }
}
