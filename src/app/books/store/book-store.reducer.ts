import { Book } from './../add/add.domain';
import * as fromRoot from '../../app-state/app-state';
import * as BooksActions from './book-store.actions';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';


export const booksAdapter: EntityAdapter<Book> = createEntityAdapter<Book>();

export interface AppState extends fromRoot.AppState {
    allBooks: Book[],
    error: string | null,
    resposne?: Book | Book[]
}
const deafultState = {
    allBooks: [],
    error: null
}
const initialState = booksAdapter.getInitialState(deafultState);

export function BookReducer(state = initialState, action: BooksActions.Actions): AppState {
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

        case BooksActions.BooksActionType.DELETE_BOOKS: {
            return {
                ...state
            };
        }
        case BooksActions.BooksActionType.DELETE_BOOKS_SUCCESS: {
            booksAdapter.removeOne(action.payload, state);
            return {
                ...state,
                resposne: state.allBooks
            };
        }
        case BooksActions.BooksActionType.DELETE_BOOKS_FAIL: {
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