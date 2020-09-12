import { moduleMetadata, Story } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../app/directives/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ListComponent } from './../app/books/list/list.component';
import { StoreModule } from '@ngrx/store';

export default {
    title: 'Book List',
    component: ListComponent,
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
                SharedModule
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
        })
    ]
} as Meta;

const Template: Story<ListComponent> = (args: ListComponent) => ({
    component: ListComponent,
    props: args
});

export const AllBooksList = Template.bind({});
AllBooksList.args = {
    isLoggedIn: false,
    booksList: [{
        "name": "Bappa Morya",
        "image": "https://img.maalaimalar.com/Articles/2020/Jan/202001211210404528_Vinayagar-Viratham_SECVPF.gif",
        "price": "499",
        "id": 2,
        "user": 1
    },
    {
        "name": "Call Me God",
        "image": "https://m.media-amazon.com/images/I/51pf5R6ECNL._SL500_.jpg",
        "price": "2999",
        "id": 3,
        "user": 3
    },
    {
        "name": "History Of Caves",
        "image": "https://previews.123rf.com/images/eric1513/eric15130610/eric1513061000139/579240-closeup-picture-of-a-row-of-old-history-books.jpg",
        "price": "12000",
        "id": 4,
        "user": 1
    },
    {
        "name": "The Law Of Success",
        "image": "https://m.media-amazon.com/images/I/41FLKI4LR2L._SL500_.jpg",
        "price": "999",
        "id": 5,
        "user": 1
    },
    {
        "name": "Think & Grow Rich",
        "image": "https://m.media-amazon.com/images/I/51vKha04DuL._SL500_.jpg",
        "price": "1499",
        "user": 5,
        "id": 6
    },
    {
        "name": "The Power Of Concious Mind",
        "image": "https://m.media-amazon.com/images/I/61qJEwIdijL._SL500_.jpg",
        "price": "15000",
        "user": 5,
        "id": 7
    },
    {
        "name": "Chanakya Niti",
        "image": "https://m.media-amazon.com/images/I/61Edv0mBTXL._SL500_.jpg",
        "price": "11000",
        "user": 5,
        "id": 8
    },
    {
        "name": "Yes Please",
        "image": "https://m.media-amazon.com/images/I/51XNAnQGe+L._SL500_.jpg",
        "price": "399",
        "user": 3,
        "id": 9
    },
    {
        "name": "Riding the Elephant",
        "image": "https://m.media-amazon.com/images/I/51GFAcYL7DL._SL500_.jpg",
        "price": "699",
        "user": 3,
        "id": 10
    }
    ]
}


export const YourBooks = Template.bind({});
YourBooks.args = {
    isLoggedIn: true,
    loginUserId: 3,
    booksList: [{
        "name": "Yes Please",
        "image": "https://m.media-amazon.com/images/I/51XNAnQGe+L._SL500_.jpg",
        "price": "399",
        "user": 3,
        "id": 9
    },
    {
        "name": "Riding the Elephant",
        "image": "https://m.media-amazon.com/images/I/51GFAcYL7DL._SL500_.jpg",
        "price": "699",
        "user": 3,
        "id": 10
    }]
}