import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonHeaderComponent } from './common-header.component';
import { HeaderService } from '../../../services/headerServices/header.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SpinnyService } from '../../../services/spinnyService/spinny.service';
import { HttpServiceService } from '../../../services/httpService/http-service.service';
describe('CommonHeaderComponent', () => {
  const router = {
    navigate: jasmine.createSpy('navigate'),
    navigateByUrl: jasmine.createSpy('navigate')
  };
  const MockDialogRef = {
    open: function () {
      console.log('modal opened');
    }
  };
  const httpserviceMock = {
    httpPostRequest: function () {
      return;
    }
  };
  let component: CommonHeaderComponent;
  let fixture: ComponentFixture<CommonHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommonHeaderComponent],
      providers: [HeaderService, { provide: HttpServiceService, useValue: httpserviceMock }, SpinnyService,
        { provide: Router, useValue: router },
        { provide: NgbModal, useValue: MockDialogRef }
      ]
    })
      .overrideTemplate(CommonHeaderComponent, '')
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
