import { Component, OnInit } from '@angular/core';
import { Page } from '../page';
import { PageService } from '../page.service';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
 public pages =[];
  constructor(private pageService : PageService) { }
  
  ngOnInit() {
    this.pageService.getPages().subscribe(data => this.pages=data);
  }



}
