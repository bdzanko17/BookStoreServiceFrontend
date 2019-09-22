import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  public authors  = [];
  constructor(private _authorService:AuthorService) { }

  ngOnInit() {
    this._authorService.getAuthors()
      .subscribe(data => this.authors = data);
  } 
  
}
