import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  public books = [];
  constructor(private bookService: BookService) {
   }
  selectedBook: Book;
  pages =[];

  ngOnInit() {
    this.bookService.getBooks().subscribe(data => this.books = data);
  }

  onSelectBook(book: Book) {
    this.selectedBook = book;
  }



}
