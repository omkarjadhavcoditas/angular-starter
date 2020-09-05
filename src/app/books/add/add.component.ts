import { Book } from './add.domain';
import { BooksService } from './../books.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  public addBookForm: FormGroup;
  public isEdit: boolean;
  private bookIdForEdit: number;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private bookService: BooksService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.addBookForm = this.createForm();
    this.checkUrlLoad();
  }

  private createForm() {
    return this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      image: [null, Validators.compose([Validators.required])],
      price: [null, Validators.compose([Validators.required])]
    })
  }
  public addBook() {
    if (this.addBookForm.valid) {
      this.isEdit ? this.updateBook() : this.addNewBook();
    } else {
      alert("Fill form properly!");
    }
  }

  private addNewBook() {
    this.bookService.addBook(this.addBookForm.value).subscribe((res: Book) => {
      if (res) {
        alert("Book Added Successfully");
        this.addBookForm.reset();
        this.router.navigate(['../list'], { relativeTo: this.activatedRoute })
      }
    });
  }
  private updateBook() {
    let bookFinal = { ...this.addBookForm.value, id: this.bookIdForEdit }
    console.log("bookFinal ", bookFinal);
    this.bookService.updateBook(bookFinal).subscribe((res: Book) => {
      if (res) {
        alert("Book Updated Successfully");
        this.addBookForm.reset();
        this.router.navigate(['../../list'], { relativeTo: this.activatedRoute })
      }
    });
  }
  private checkUrlLoad() {
    this.activatedRoute.params.subscribe(urlParam => {
      if (urlParam && urlParam.id) {
        this.isEdit = true;
        this.bookIdForEdit = urlParam.id;
        this.getBookForUpdate(urlParam.id);
      } else {
        this.isEdit = false;
      }
    })
  }

  private getBookForUpdate(bookId: number) {
    this.bookService.getBookById(bookId).subscribe((book: Book) => {
      console.log("book ", book);
      if (book) {
        this.addBookForm.patchValue(book);
      }
    })
  }
}