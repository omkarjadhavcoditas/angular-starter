import { RegisterComponent } from './../app/register/register.component';
import { moduleMetadata, Story } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../app/directives/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export default {
    title: 'Registration',
    component: RegisterComponent,
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
    ]
} as Meta;

const Template: Story<RegisterComponent> = (args: RegisterComponent) => ({
    component: RegisterComponent,
    props: args
});

export const RegistrationScreen = Template.bind({});
RegistrationScreen.args = {
    user: {}
}