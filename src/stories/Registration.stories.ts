import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RegisterComponent } from './../app/register/register.component';
import { SharedModule } from './../app/directives/shared/shared.module';

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
