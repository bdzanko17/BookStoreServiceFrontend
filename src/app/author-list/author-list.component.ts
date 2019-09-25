import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { Author } from '../author';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  public authors  = [];
  selectedAuthor: Author;
  constructor(private _authorService:AuthorService) { }

  ngOnInit() {
    this._authorService.getAuthors()
      .subscribe(data => this.authors = data);
  } 
  onSelect(author : Author):  void{
    this.selectedAuthor = author;
  }
  
  deleteAuthor(author : Author){
    this._authorService.deleteAuthor(author)
     .subscribe(() => this.ngOnInit());
  }
  
  
}
