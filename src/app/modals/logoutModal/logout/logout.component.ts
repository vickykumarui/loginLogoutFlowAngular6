import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  closeModal(logoutOrNot): void {
    this.activeModal.close(logoutOrNot);
  }

  logout(logoutOrNot) {
    this.closeModal(logoutOrNot);
  }

}
