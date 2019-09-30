import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { Page } from '../page';
import { PageService } from '../page.service';
import { ToastrService } from 'ngx-toastr';
import { BookService } from '../book.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})

export class CreatePageComponent implements OnInit {
  newPage = new Page(1, 1, '', null);
  public books = []
  selectedBook: Book;

  constructor(private bookService: BookService, private _location: Location, private toastr: ToastrService, private pageService: PageService) { }


  ngOnInit() {
    this.bookService.getBooks().subscribe(data => this.books = data);
  }

  onSubmit() {
    this.newPage.book = this.selectedBook;
    console.log(this.newPage.book);

    this.pageService.addPage(this.newPage).subscribe(() => {
      this._location.back();
      this.toastr.success("successs");
    },
      error => {
        return console.log('oops', error);
      });

  }
  onSelectedBook(book: Book): void {
    this.selectedBook = book;
  }

}
