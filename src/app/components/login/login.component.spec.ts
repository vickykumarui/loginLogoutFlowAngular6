import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';
import { ValidationclassLogin } from '../../classes/validationclass-login';
import { HeaderService } from '../../services/headerServices/header.service';
import { SpinnyService } from '../../services/spinnyService/spinny.service';
import { HttpServiceService } from '../../services/httpService/http-service.service';
describe('LoginComponent', () => {
  const router = {
    navigate: jasmine.createSpy('navigate'),
    navigateByUrl: jasmine.createSpy('navigate')
  };
  const validationclassLogin = {
    'userName': '',
    'password': ''
  };
  const httpserviceMock = {
    httpPostRequest: function () {
      return;
    }
  };
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: ValidationclassLogin, useValue: validationclassLogin },
        { provide: HttpServiceService, useValue: httpserviceMock }, SpinnyService, HeaderService,
        { provide: Router, useValue: router }]
    })
      .overrideTemplate(LoginComponent, '')
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
