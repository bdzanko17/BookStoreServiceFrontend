import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Author } from './author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  [x: string]: any;
  private _url: string = "http://localhost:7000/author";
  constructor(private http: HttpClient) { }
  
  getAuthors(): Observable<Author[]>{
    let headersList = new HttpHeaders();
    headersList = headersList.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Author[]>(this._url, {headers: headersList});
  }

  addAuthor(author: Author): Observable<any>{
    return this.http.post(this._url,author);
   

}

}
