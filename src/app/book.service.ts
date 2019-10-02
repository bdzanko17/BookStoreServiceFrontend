import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Page } from './page';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _url: string = "http://localhost:7000/books";
  private _url2: string = "http://localhost:7000/pages";

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]>{
    let headersList = new HttpHeaders();
    headersList = headersList.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Book[]>(this._url, {headers: headersList});
  }
  
  addBook(book: Book): Observable<any>{
    return this.http.post(this._url,book);
  
  }
  public selectedPages=[];

  getPagesFromBook(book: Book,list):Observable<any>{
    let headersList = new HttpHeaders();
    headersList = headersList.append('Access-Control-Allow-Origin', '*');
    let param = new HttpParams();
    param =param.append('list','[1]');
    return this.http.get<Page[]>(this._url2+"/bookPages/"+book.id,{headers: headersList,params: param})
  }
  
}
