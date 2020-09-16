import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

import { Store } from '@ngrx/store';

import { Book } from './../add/add.domain';
import { AppService } from './../../app.service';
import { BooksService } from './../books.service';
import * as BooksAction from '../store/book-store.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public readonly defaultCover = 'https://www.mockupworld.co/wp-content/uploads/dynamic/2016/06/free-hardcover-square-book-mockup1-536x0-c-default.jpg';
  public isLoggedIn: boolean;
  public booksList: Book[];
  public loginUserId: number;

  constructor(
    private router: Router,
    private appService: AppService,
    private booksService: BooksService,
    private activatedRoute: ActivatedRoute,
    private store: Store<any>
  ) {
    this.booksList = [];
  }

  ngOnInit(): void {
    this.appService.setPageTitle('Books Mania');
    this.checkLoginStatus();
    this.checkUrlLoad();
  }
  private checkUrlLoad() {
    this.activatedRoute.url.subscribe((urlParam: UrlSegment[]) => {
      if (urlParam && urlParam.length > 0) {
        urlParam.length > 0 && urlParam[0].path === 'list' ?
          this.getLoginUserBooks() : this.getAllBooks();
      }
    })
  }
  private checkLoginStatus() {
    this.isLoggedIn = this.appService.isUserLoggedIn();
    this.isLoggedIn ? this.loginUserId = this.appService.getLoginUser().id : '';
    this.appService.loginTrigger.subscribe((log: boolean) => {
      if (log !== null) {
        this.isLoggedIn = log;
      }
    })
  }
  private getAllBooks() {
    this.store.dispatch(new BooksAction.LoadAllBooks());
    this.store.subscribe(state => {
      this.booksList = [...state.books.allBooks]
    })
  }
  private getLoginUserBooks() {
    this.store.dispatch(new BooksAction.LoadLoginBooks());
    this.store.subscribe(state => (this.booksList = [...state.books.allBooks]))

  }
  public editBookOpt(bookId: number) {
    this.router.navigate([`../update/${bookId}`], { relativeTo: this.activatedRoute });
  }
  public deleteBook(bookId: number) {
    this.booksService.deleteBookById(bookId).subscribe((result: object) => {
      if (result) {
        this.booksList.splice(this.booksList.findIndex(ele => ele.id === bookId), 1);
        alert('Book Deleted From Library!');
      }
    })
  }
}
