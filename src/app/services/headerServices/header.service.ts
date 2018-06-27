import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private currentPage = new BehaviorSubject<any>('welcome');
  currentPageObs = this.currentPage.asObservable();

  changecurrentPage(toggle) {
    this.currentPage.next(toggle);
  }

  constructor() { }
}
