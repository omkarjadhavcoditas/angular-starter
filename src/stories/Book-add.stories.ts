import { moduleMetadata, Story } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../app/directives/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AddComponent } from '../app/books/add/add.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export default {
    title: 'Add Books',
    component: AddComponent,
    argTypes: {
        isLoggedIn: { control: 'boolean' }
    },
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                BrowserModule,
                RouterModule.forRoot([]),
                StoreModule.forRoot({}),
                HttpClientModule,
                FormsModule,
                ReactiveFormsModule,
                SharedModule
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
        })
    ]
} as Meta;

const Template: Story<AddComponent> = (args: AddComponent) => ({
    component: AddComponent,
    props: args
});

export const AddBookForm = Template.bind({});
AddBookForm.args = {
    isEdit: false
}


export const EditBookForm = Template.bind({});
EditBookForm.args = {
    isEdit: true,
    bookIdForEdit: 2
}