import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { NavbarComponent } from './../app/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

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

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {
//   isLoggedIn: false
// };
