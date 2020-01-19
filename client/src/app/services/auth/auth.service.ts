import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable';
// import { catchError } from 'rxjs/operators';
// import { throwError } from 'rxjs/internal/observable/throwError';

import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private api = environment.API;
  // private headers = new Headers({
  //   'Authorization': 'Basic ' + environment.APP_SECRET,
  //   'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
  // });

  constructor(
    // private http: Http,
    private router: Router,
    private toastr: ToastrService,
    private httpClient: HttpClient,
    private ngxLoader: NgxUiLoaderService,
  ) { }

  // login(email: string, password: string): Observable<boolean> {

  //   const params = new URLSearchParams();
  //   const authorization = new RequestOptions({ headers: this.headers });

  //   params.append('username', email);
  //   params.append('password', password);
  //   params.append('grant_type', 'password');

  //   return this.http.post(this.api + 'oauth/token', params.toString(), authorization)
  //     .pipe(catchError(err => {
  //       this.ngxLoader.stop();
  //       const errorData = err.json();
  //       if (errorData['error'] == 'invalid_grant') {
  //         this.toastr.error('Username or password is invalid!', 'Invalid Credentials', {
  //           timeOut: 2000
  //         });
  //         return JSON.parse(JSON.stringify(errorData));
  //       } else {
  //         this.toastr.error('Internal server error please try again latter!', 'Internal Server Error', {
  //           timeOut: 2000
  //         });
  //         return throwError(err);
  //       }
  //     }))
  //     .map((response: Response) => {
  //       const responseData = response.json();
  //       if (responseData['access_token'] != undefined && responseData['refresh_token'] != undefined) {
  //         this.tokenData = {
  //           access_token: responseData['access_token'],
  //           expires_in: responseData['expires_in'],
  //           refresh_token: responseData['refresh_token'],
  //         }
  //         localStorage.setItem('token_data', JSON.stringify(this.tokenData));
  //         return JSON.parse(JSON.stringify(responseData));
  //       }
  //       return JSON.parse(JSON.stringify(responseData));
  //     });
  // }
  // refreshToken(): Observable<any> {
    
  //   let params = new URLSearchParams();
  //   const authorization = new RequestOptions({ headers: this.headers });

  //   let tokenData = JSON.parse(localStorage.getItem('token_data'));
  //   let refreshToken = tokenData['refresh_token'];

  //   params.append("refresh_token", refreshToken);
  //   params.append("grant_type", "refresh_token");

  //   return this.http.post(this.api + 'oauth/token', params.toString(), authorization)
  //   .map((response: Response) => {
  //     const responseData = response.json();
  //     if (responseData && responseData['access_token']) {
  //       tokenData['access_token'] = responseData['access_token'];
  //       localStorage.setItem('token_data', JSON.stringify(tokenData));
  //       this.tokenData = tokenData;
  //     }
  //     return JSON.parse(JSON.stringify(responseData));;
  //   });
  // }
  // getCurrentUser(userRole) {
  //   return this.httpClient.get(this.api + 'login/currentUser')
  //     .map((response: Response) => {
  //       this.currentUser = response;
  //       if (this.currentUser['user_id']) {
  //         if (this.searchRole(userRole, this.currentUser['roles'])) {
  //           this.currentUser.role = userRole;
  //           localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  //         } else {
  //           localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  //         }
  //         return JSON.parse(JSON.stringify(this.currentUser));
  //       }
  //       return JSON.parse(JSON.stringify(response));
  //     });
  // }
  // getToken() {
  //   const tokenData = this.tokenData ? this.tokenData : JSON.parse(localStorage.getItem('token_data'));
  //   return tokenData ? tokenData.access_token : false;
  // }
  // getAllUsers() {
  //   return this.httpClient.get(this.api + 'login/user')
  //     .map((response: Response) => {
  //       return JSON.parse(JSON.stringify(response));
  //     });
  // }
  // isLoggedIn() {
  //   const currentUser = this.currentUser ? this.currentUser : JSON.parse(localStorage.getItem('currentUser'));
  //   return currentUser ? currentUser : false;
  // }
  // isLoggedUserInfo() {
  //   const currentUser = this.currentUser ? this.currentUser : JSON.parse(localStorage.getItem('currentUser'));
  //   return currentUser ? currentUser : false;
  // }
  // logout() {
  //   let tokenData = JSON.parse(localStorage.getItem('token_data'));
  //   localStorage.removeItem('token_data');
  //   localStorage.removeItem('currentUser');

  //   this.httpClient.get(this.api + 'login/logout?refreshToken=' + tokenData['refresh_token']);
  //   this.router.navigate(['/login']);
  // }
  // searchRole(nameKey, userRoles) {
  //   for (var i=0; i < userRoles.length; i++) {
  //     if (userRoles[i].name === nameKey) {
  //       return nameKey;
  //     }
  //   }
  // }
}
