import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginComponent } from './../app/login/login.component';
import { SharedModule } from './../app/directives/shared/shared.module';

export default {
    title: 'Login',
    component: LoginComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                BrowserModule,
                RouterModule.forRoot([]),
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                SharedModule
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
        })
        ,
    ]
} as Meta;

const Template: Story<LoginComponent> = (args: LoginComponent) => ({
    component: LoginComponent,
    props: args,
});

export const LoginScreen = Template.bind({});
LoginScreen.args = {
    user: {}
};