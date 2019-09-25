import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _url: string = "http://localhost:7000/books";
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]>{
    let headersList = new HttpHeaders();
    headersList = headersList.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Book[]>(this._url, {headers: headersList});
  }
  
  addBook(book: Book): Observable<any>{
    return this.http.post(this._url,book);
  
  }
  
}
