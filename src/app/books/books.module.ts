import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { BooksRoutingModule } from './books-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import '../../lit-element/card.ts';

@NgModule({
  declarations: [ListComponent, AddComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BooksModule { }
