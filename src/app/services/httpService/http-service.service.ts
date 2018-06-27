import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }
  private postheader = {
    headers: new HttpHeaders()
      .set('Access-Control-Request-Headers', 'authorization,content-type,x-api-key')
      .set('Access-Control-Request-Method', 'POST')
  };

  httpPostRequest(url, request) {

    return this.http.post(url, request, this.postheader);
  }

}
