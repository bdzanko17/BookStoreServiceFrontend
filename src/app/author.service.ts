import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Author } from './author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private _url: string = "http://localhost:7000/authors";
  constructor(private http: HttpClient) { }
  
  getAuthors(): Observable<Author[]>{
    let headersList = new HttpHeaders();
    headersList = headersList.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Author[]>(this._url, {headers: headersList});
  }

  addAuthor(author: Author): Observable<any>{
    return this.http.post(this._url,author);
  
}
  deleteAuthor(author:Author):Observable<{}>{
    
    console.log(author.id);
    
    return this.http.delete(this._url+"/"+author.id);
  }
  getAuthor(x):Observable<Author>{
    let headersList = new HttpHeaders();
    headersList = headersList.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Author>(this._url+"/"+x,{headers : headersList});
  }


}
