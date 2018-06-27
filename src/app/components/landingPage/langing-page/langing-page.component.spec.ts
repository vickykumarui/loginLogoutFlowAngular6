import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderService } from '../../../services/headerServices/header.service';
import { HttpClient } from '@angular/common/http';
import { LangingPageComponent } from './langing-page.component';

describe('LangingPageComponent', () => {
  const httpClient = {
    url: '',
    get: function (url) {
      this.url = url;
      return {
        subscribe: function (fn) {
          const result = { 'Technology': 'sample', 'Fiction': 'sample', 'Sports': 'sample' };
          fn(result);
        }
      };
    }
  };
  let component: LangingPageComponent;
  let fixture: ComponentFixture<LangingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LangingPageComponent],
      providers: [HeaderService,
        { provide: HttpClient, useValue: httpClient }
      ]
    })
      .overrideTemplate(LangingPageComponent, '')
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
