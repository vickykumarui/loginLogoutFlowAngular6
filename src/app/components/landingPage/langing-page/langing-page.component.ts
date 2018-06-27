import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeaderService } from '../../../services/headerServices/header.service';

@Component({
  selector: 'app-langing-page',
  templateUrl: './langing-page.component.html',
  styleUrls: ['./langing-page.component.css']
})
export class LangingPageComponent implements OnInit {


  constructor(private http: HttpClient, private headerService: HeaderService) { }
  public fictionBooks;
  public sportsBooks;
  public technologyBooks;
  ngOnInit() {
    this.headerService.changecurrentPage('login');
    // download image json and populate images
    // enable loading
    this.http.get('assets/jsonData/booksList.json').subscribe(res => {
      this.technologyBooks = res['Technology'];
      this.fictionBooks = res['Fiction'];
      this.sportsBooks = res['Sports'];
      console.log(res);

    });
    const curentUser = sessionStorage.getItem('userId');
    this.headerService.changecurrentPage('Logged in as ' + curentUser);
  }

}
