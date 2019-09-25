import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { Author } from '../author';
import {Location} from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent{
  newAuthor = new Author(null,'');

  constructor(private _authorService:AuthorService, private _location: Location, private toastr:ToastrService) { }
 
  onSubmit(){
    console.log(this.newAuthor);
    
    this._authorService.addAuthor(this.newAuthor)
      .subscribe(()=> {this._location.back();
      this.toastr.success("successs");
      },
        error => {
          return console.log('oops', error);
        });
  }

}
