import { Action } from '@ngrx/store';

import { Book } from './../add/add.domain';

export enum BooksActionType {
    LOAD_ALL_BOOKS = '[BOOKS] Load All Books',
    LOAD_ALL_BOOKS_SUCCESS = '[BOOKS] Load Books Success',
    LOAD_ALL_BOOKS_FAIL = '[BOOKS] Load Books Fail',

    LOAD_LOGIN_BOOKS = '[BOOKS] Load Login Books',
    LOAD_LOGIN_BOOKS_SUCCESS = '[BOOKS] Load Books Success',
    LOAD_LOGIN_BOOKS_FAIL = '[BOOKS] Load Books Fail',

    DELETE_BOOKS = '[BOOKS] Delete Books',
    DELETE_BOOKS_SUCCESS = '[BOOKS] Delete Book Success',
    DELETE_BOOKS_FAIL = '[BOOKS] Delete Book Fail'
}

export class LoadAllBooks implements Action {
    readonly type = BooksActionType.LOAD_ALL_BOOKS;
}
export class LoadAllBooksSuccess implements Action {
    readonly type = BooksActionType.LOAD_ALL_BOOKS_SUCCESS;
    constructor(public payload: Book[]) { }
}
export class LoadAllBooksFail implements Action {
    readonly type = BooksActionType.LOAD_ALL_BOOKS_FAIL;
    constructor(public payload: string) { }
}

export class LoadLoginBooks implements Action {
    readonly type = BooksActionType.LOAD_LOGIN_BOOKS;
}
export class LoadLoginBooksSuccess implements Action {
    readonly type = BooksActionType.LOAD_LOGIN_BOOKS_SUCCESS;
    constructor(public payload: Book[]) { }
}
export class LoadLoginBooksFail implements Action {
    readonly type = BooksActionType.LOAD_LOGIN_BOOKS_FAIL;
    constructor(public payload: string) { }
}

export class DeleteBook implements Action {
    readonly type = BooksActionType.DELETE_BOOKS;
    constructor(public payload: number) { }
}
export class DeleteBookSuccess implements Action {
    readonly type = BooksActionType.DELETE_BOOKS_SUCCESS;
    constructor(public payload: number) { }
}
export class DeleteBookFail implements Action {
    readonly type = BooksActionType.DELETE_BOOKS_FAIL;
    constructor(public payload: string) { }
}

export type Actions =
    LoadAllBooks | LoadAllBooksSuccess | LoadAllBooksFail |
    LoadLoginBooks | LoadLoginBooksSuccess | LoadLoginBooksFail |
    DeleteBook | DeleteBookSuccess | DeleteBookFail