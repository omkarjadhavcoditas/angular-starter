import { moduleMetadata } from '@storybook/angular';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import Button from './button.component';
import Header from './header.component';
import Page from './page.component';

import * as HeaderStories from './Header.stories';
import { LoginComponent } from './../app/login/login.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Card } from './../lit-element/card';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './../app/register/register.component';

export default {
  title: 'Page',
  component: LoginComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule,
        RouterModule.forRoot([]),
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    })
    ,
  ],
} as Meta;

const Template: Story<LoginComponent> = (args: LoginComponent) => ({
  component: LoginComponent,
  props: args,
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const Registration = Template.bind({
  component: RegisterComponent
});
Registration.args = {
  ...HeaderStories.LoggedOut.args,
};
