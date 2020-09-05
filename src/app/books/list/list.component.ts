import { BooksService } from './../books.service';
import { Book } from './../add/add.domain';
import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

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
    private activatedRoute: ActivatedRoute
  ) {
    this.booksList = [];
  }

  ngOnInit(): void {
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
    this.appService.loginTrigger.subscribe((log: boolean) => { this.isLoggedIn = log; })
  }
  private getAllBooks() {
    this.booksService.getAllBooksList().subscribe((allBooks: Book[]) => {
      this.booksList = allBooks;
    })
  }
  private getLoginUserBooks() {
    this.booksService.getLoginUserBooksList().subscribe((allBooks: Book[]) => {
      this.booksList = allBooks;
    })
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
