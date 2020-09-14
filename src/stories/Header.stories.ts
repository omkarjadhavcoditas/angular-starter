import { RouterModule } from '@angular/router';
import { CommonModule, APP_BASE_HREF } from '@angular/common';

import { Meta } from '@storybook/angular/types-6-0';
import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata, Story } from '@storybook/angular';

import { NavbarComponent } from './../app/navbar/navbar.component';

export default {
  title: 'Header',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule,
        RouterModule.forRoot([]),
        BrowserModule
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    })
    ,
  ],
} as Meta;

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  component: NavbarComponent,
  props: args,
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
  isLoggedIn: true
};
