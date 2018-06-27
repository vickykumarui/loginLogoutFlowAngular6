import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../services/headerServices/header.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogoutComponent } from '../../../modals/logoutModal/logout/logout.component';
import { SpinnyService } from '../../../services/spinnyService/spinny.service';
import { HttpServiceService } from '../../../services/httpService/http-service.service';
@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.css']
})
export class CommonHeaderComponent implements OnInit {
  public status;
  constructor(private headerService: HeaderService, private router: Router, private modalService: NgbModal,
    private spinnyService: SpinnyService, private httpServiceService: HttpServiceService) { }

  ngOnInit() {
    this.headerService.currentPageObs.subscribe(res => {
      this.status = res;
    });

  }

  logout() {
    const modalRef = this.modalService.open(LogoutComponent);
    modalRef.result.then(res => {
      if (res) {
        this.logoutService();

      } else {
        console.log('Logout cancelled');
      }
    }, err => {
      console.log('Logout cancelled', err);
    });

  }


  logoutService() {
    const request = {
      'userName': sessionStorage.getItem('userId')
    };
    this.spinnyService.showSpinny('Logging out ');
    this.httpServiceService.httpPostRequest
      ('https://jdposr6fy4.execute-api.us-east-1.amazonaws.com/logoutDevApi', request).subscribe(res => {
        this.spinnyService.hideSpinny();
        if (res['success']) {

          sessionStorage.removeItem('userId');
          this.router.navigate(['/welcome']);
        } else {
          console.log(res['errorMessage']);
        }


      }, err => {
        this.spinnyService.hideSpinny();
        console.log('Something went wrong', err);
      });

  }

}
