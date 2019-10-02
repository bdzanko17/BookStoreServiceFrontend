import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ToastrService } from 'ngx-toastr';
import { AuthorService } from '../author.service';
import { Author } from '../author';
import { Location } from '@angular/common';
@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  newBook = new Book(1, '', '', null,null);
  public authors = [];
  selectedAuthor: Author;
  selectedAuthors = [];
  constructor(private bookService: BookService, private _location: Location, private toastr: ToastrService, private authorService: AuthorService) { }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe(data => this.authors = data);
  }
  onSubmit() {
    this.newBook.authors = this.selectedAuthors;
    this.bookService.addBook(this.newBook).subscribe(() => {
      this._location.back();
      this.toastr.success("successs");
    },
      error => {
        return console.log('oops', error);
      });

  }
  onSelect(author: Author): void {
    this.selectedAuthor = author;
    this.selectedAuthors.push(this.selectedAuthor.id)
  }

}
