import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Page } from './page';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private _url: string = "http://localhost:7000/pages";
  constructor(private http: HttpClient) { }
  
  getPages(): Observable<Page[]>{
    let headersList = new HttpHeaders();
    headersList = headersList.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Page[]>(this._url, {headers: headersList});
  }
  addPage(newPage: Page) {
    return this.http.post(this._url,newPage);
  }

}
