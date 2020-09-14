import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Book } from './add/add.domain';
import { AppService } from './../app.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private readonly serverUrl = 'http://localhost:3000/allBooks';


  constructor(
    private httpClient: HttpClient,
    private appService: AppService
  ) { }

  public addBook(bookData: Book): Observable<Book> {
    bookData.user = this.appService.getLoginUser().id;
    return this.httpClient.post<Book>(this.serverUrl, bookData)
  }
  public updateBook(bookData: Book): Observable<Book> {
    bookData.user = this.appService.getLoginUser().id;
    return this.httpClient.put<Book>(`${this.serverUrl}/${bookData.id}`, bookData)
  }
  public deleteBookById(bookId: number): Observable<object> {
    return this.httpClient.delete<object>(`${this.serverUrl}/${bookId}`)
  }
  public getAllBooksList(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.serverUrl)
  }
  public getBookById(bookId: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.serverUrl}/${bookId}`)
  }
  public getLoginUserBooksList(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.serverUrl,
      {
        params: new HttpParams().
          set('user', this.appService.getLoginUser().id.toString())
      })
  }

}
