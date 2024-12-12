import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://35.187.248.255:214/api/win/login';

  constructor(private http: HttpClient) { }

  //post login
  postData( body: any): Observable<any> {
    // const url = `${this.loginUrl}/${endpoint}`;
    return this.http.post(this.loginUrl, body);
  }
}
