import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationclassLogin } from '../../classes/validationclass-login';
import { HeaderService } from '../../services/headerServices/header.service';
import { SpinnyService } from '../../services/spinnyService/spinny.service';
import { HttpServiceService } from '../../services/httpService/http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public serviceErrorMessage = '';
  // tslint:disable-next-line:quotemark
  public validationrule = "^(?!.*\/)([0-9a-zA-Z~/!/s/@//#//$//%//&//*//(//)//+//=//{//}//://;//'//<//>/]|-|){1,58}$";
  constructor(private router: Router,
    private headerService: HeaderService, private spinnyService: SpinnyService, private httpServiceService: HttpServiceService) { }

  ngOnInit() {
    this.headerService.changecurrentPage('Welcome to login page');
  }

  // tslint:disable-next-line:member-ordering
  model = new ValidationclassLogin('', '');

  get diagnostic() { return JSON.stringify(this.model); }
  login() {
    this.serviceErrorMessage = '';
    const request = {
      'userName': this.model.username,
      'password': this.model.password
    };
    this.spinnyService.showSpinny('Logging in ');
    this.httpServiceService.httpPostRequest
      ('https://93uyekkry0.execute-api.us-east-1.amazonaws.com/loginApidevStage', request).subscribe(res => {
        this.spinnyService.hideSpinny();
        if (res['success']) {
          sessionStorage.setItem('userId', this.model.username);
          this.router.navigate(['/landing']);
        } else {
          sessionStorage.removeItem('userId');
          this.serviceErrorMessage = res['errorMessage'];
        }


      }, err => {
        this.spinnyService.hideSpinny();
        sessionStorage.removeItem('userId');
        this.serviceErrorMessage = 'Something went wrong please try after sometime';
      });

  }

  goBack() {
    this.router.navigate(['/welcome']);
  }

}
