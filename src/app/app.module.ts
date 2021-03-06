import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorService } from './author.service';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './book-list/book-list.component';
import { BookService } from './book.service';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { ToastrModule} from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CreateBookComponent } from './create-book/create-book.component';
import { PageListComponent } from './page-list/page-list.component';
import { CreatePageComponent } from './create-page/create-page.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AuthorListComponent,
    BookListComponent,
    CreateAuthorComponent,
    CreateBookComponent,
    PageListComponent,
    CreatePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right'
    })
    ],
  providers: [AuthorService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
