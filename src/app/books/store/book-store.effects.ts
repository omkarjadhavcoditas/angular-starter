import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { of, Observable } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { BooksService } from './../books.service';
import { Book } from './../add/add.domain';
import * as BooksAction from "./book-store.actions";

@Injectable()
export class BooksEffect {
    constructor(
        private actions$: Actions,
        private bookservice: BooksService
    ) { }

    @Effect()
    loadAllBooks$: Observable<Action> = this.actions$.pipe(
        ofType<BooksAction.LoadAllBooks>(BooksAction.BooksActionType.LOAD_ALL_BOOKS),
        mergeMap((action: BooksAction.LoadAllBooks) =>
            this.bookservice.getAllBooksList().pipe(
                map((books: Book[]) =>
                    new BooksAction.LoadAllBooksSuccess(books)
                ),
                catchError(err => of(new BooksAction.LoadAllBooksFail(err)))
            )
        )
    );

    @Effect()
    loadLoginUsersBooks$: Observable<Action> = this.actions$.pipe(
        ofType<BooksAction.LoadLoginBooks>(BooksAction.BooksActionType.LOAD_LOGIN_BOOKS),
        mergeMap((action: BooksAction.LoadLoginBooks) =>
            this.bookservice.getLoginUserBooksList().pipe(
                map((books: Book[]) =>
                    new BooksAction.LoadLoginBooksSuccess(books)
                ),
                catchError(err => of(new BooksAction.LoadLoginBooksFail(err)))
            )
        )
    )
}