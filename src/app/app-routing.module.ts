import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorListComponent } from './author-list/author-list.component';
import { BookListComponent } from './book-list/book-list.component';


const routes: Routes = [  
    { path: 'author', component: AuthorListComponent},
    { path: 'book', component: BookListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
 export const routingComponents = [
  AuthorListComponent,
  BookListComponent
 ]
