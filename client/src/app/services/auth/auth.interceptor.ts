// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { BehaviorSubject, throwError } from 'rxjs';
// import { switchMap, catchError, take, finalize, filter } from 'rxjs/operators';
// import { HttpRequest, HttpHandler, HttpInterceptor, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpErrorResponse } from '@angular/common/http';

// import { AuthService } from './auth.service';
// // import { environment } from '../../../environments/environment';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   private isRefreshingToken: boolean = false;
//   private tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

//   constructor(
//     public oAuth: AuthService
//   ) { }

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any> | any> {
//     return next.handle(this.addTokenToRequest(request, this.oAuth.getToken())).pipe(catchError(err => {
//       if (err instanceof HttpErrorResponse) {
//         switch ((<HttpErrorResponse>err).status) {
//           case 401:
//             return this.handle401Error(request, next);
//           case 0:
//             return this.handle401Error(request, next);
//           case 400:
//             return <any>this.oAuth.logout();
//         }
//         if (err.status === 400) {
//           return throwError(err);
//         }
//       } else {
//         return throwError(err);
//       }
//     }));
//   }

//   public handle401Error(request: HttpRequest<any>, next: HttpHandler) {
//     if (this.isRefreshingToken) {
//       return this.tokenSubject
//         .pipe(filter(token => token != null),
//         take(1),
//         switchMap(token => {
//           return next.handle(this.addTokenToRequest(request, token));
//         }));
//     } else {
//       this.isRefreshingToken = true;
//       this.tokenSubject.next(null);
//       return this.oAuth.refreshToken().pipe(switchMap((tokenData: any) => {
//         if (tokenData) {
//           this.tokenSubject.next(tokenData['access_token']);
//           return next.handle(
//             this.addTokenToRequest(request, tokenData['access_token'])
//           );
//         }
//       }),
//         catchError(err => {
//           console.log(err);
          
//           this.isRefreshingToken = false;
//           return <any>this.oAuth.logout();
//         }),
//         finalize(() => {
//           this.isRefreshingToken = false;
//         })
//       );
//     }
//   }

//   public addTokenToRequest(request: HttpRequest<any>, token: string): HttpRequest<any> {
//     if (token) {
//       return request.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
//     }
//     // else {
//     //   request = request.clone({ setHeaders: { Authorization: 'Basic ' + environment.APP_SECRET }});
//     //   request = request.clone({ headers: request.headers.set("Content-Type", "application/x-www-form-urlencoded") });
//     //   return request;
//     // }
//   }
// }
