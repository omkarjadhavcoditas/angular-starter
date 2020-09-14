import { Book } from './../add/add.domain';
import * as fromRoot from '../../app-state/app-state';
import * as BooksActions from './book-store.actions';

export interface AppState extends fromRoot.AppState {
    allBooks: Book[],
    error: string | null
}
const inintalState = {
    allBooks: [],
    error: null
}

export function BookReducer(state = inintalState, action: BooksActions.Actions): AppState {
    switch (action.type) {
        case BooksActions.BooksActionType.LOAD_ALL_BOOKS: {
            return {
                ...state
            };
        }
        case BooksActions.BooksActionType.LOAD_ALL_BOOKS_SUCCESS: {
            return {
                ...state,
                allBooks: action.payload
            };
        }
        case BooksActions.BooksActionType.LOAD_ALL_BOOKS_FAIL: {
            return {
                ...state,
                error: action.payload
            };
        }
        case BooksActions.BooksActionType.LOAD_LOGIN_BOOKS: {
            return {
                ...state
            };
        }
        case BooksActions.BooksActionType.LOAD_LOGIN_BOOKS_SUCCESS: {
            return {
                ...state,
                allBooks: action.payload
            };
        }
        case BooksActions.BooksActionType.LOAD_LOGIN_BOOKS_FAIL: {
            return {
                ...state,
                error: action.payload
            };
        }
        default: {
            return state;
        }
    }
}