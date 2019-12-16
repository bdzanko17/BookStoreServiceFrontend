import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthorService} from './author.service';
import {Author} from './author';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authorService: AuthorService, private router: Router) {
  }

  title = 'BookStore';
  findedAuthor: Author;
  x: number;
  authorIsSelected = false;

  findAuthor(x) {
    this.authorIsSelected = false;
    console.log(x);
    this.authorService.getAuthor(x).subscribe(data => this.findedAuthor = data);
  }

  isHomeRoute() {
    return this.router.url === '/';
  }

  authorSelect(x) {
    this.authorIsSelected = true;
  }

}
