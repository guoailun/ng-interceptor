import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  httpOptions: any;
  token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZG1pbkBpYm0uY29tIn0.iTYXbQBDQe5GMhraKDO5OxUjCM1Y-qkP_87HYZ9OweY"
  constructor() {
    // this.httpOptions = {
    //   headers: new HttpHeaders(),
    // };
   }
  getConfig() {
    // return this.http
    //   .get(
    //     `https://platform-sandbox.tradelens.com/api/v2/documentSchema`,
    //     this.httpOptions
    //   )
    //   .pipe(catchError(this.handleError));
    // this.httpOptions.headers.set('Authorization', this.token);
    // this.httpOptions.headers.set('Accept-Language', 'en');

    // console.log(this.httpOptions)
    // return this.http.get('api/v1/projects', this.httpOptions);
  }
}
