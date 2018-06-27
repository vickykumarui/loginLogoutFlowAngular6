import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../../services/headerServices/header.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.changecurrentPage('welcome to app');
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
