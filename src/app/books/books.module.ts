import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Card } from './../../lit-element/card';
import { AddComponent } from './add/add.component';
import { LoginGuard } from './../guards/login.guard';
import { ListComponent } from './list/list.component';
import { BookReducer } from './store/book-store.reducer';
import { BooksEffect } from './store/book-store.effects';
import { BooksRoutingModule } from './books-routing.module';
import { SharedModule } from './../directives/shared/shared.module';

@NgModule({
  declarations: [ListComponent, AddComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    BooksRoutingModule,
    StoreModule.forFeature('books', BookReducer),
    EffectsModule.forFeature([BooksEffect])
  ],
  providers: [LoginGuard],
  entryComponents: [Card],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BooksModule { }
