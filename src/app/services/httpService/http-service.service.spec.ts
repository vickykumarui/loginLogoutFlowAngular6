import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpServiceService } from './http-service.service';

describe('HttpServiceService', () => {
  const httpClient = {
    url: '',
    post: function (url) {
      this.url = url;
      return {
        subscribe: function (fn) {
          const result = { 'success': true };
          fn(result);
        }
      };
    }
  };

  const httpHeaderMock = {
    set: function () {
      return 'mock';
    }
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpServiceService, { provide: HttpHeaders, useValue: httpHeaderMock }, { provide: HttpClient, useValue: httpClient }]
    });
  });

  it('should be created', inject([HttpServiceService], (service: HttpServiceService) => {
    expect(service).toBeTruthy();
  }));
});
