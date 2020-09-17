import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Card } from '../../lit-element/card';
import { SharedModule } from '../directives/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppService } from '../app.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let userField: any;
  let passwordField: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, SharedModule],
      declarations: [LoginComponent],
      providers: [AppService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userField = fixture.nativeElement.getElementById("username");
    passwordField = fixture.nativeElement.getElementById("password");
    console.log(userField, passwordField);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('Inputs are checked for null', () => {
  //   expect(userField).toBe(null);
  //   expect(passwordField).toBe(null);
  // });

});
