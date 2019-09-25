import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorListComponent } from './author-list/author-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { CreateBookComponent } from './create-book/create-book.component';


const routes: Routes = [  
    { path: 'authors', component: AuthorListComponent},
    { path: 'books', component: BookListComponent},
    { path: 'author', component: CreateAuthorComponent},
    { path: 'book', component: CreateBookComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
 export const routingComponents = [
  AuthorListComponent,
  BookListComponent,
  CreateAuthorComponent,
  CreateBookComponent
 ]
