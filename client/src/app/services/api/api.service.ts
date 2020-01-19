import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(
    private httpClient: HttpClient
  ) { }

  private api = environment.API;
  private routes = {
    'createUser': '/users',
    'getUsers': '/users',
    'getUserById': '/users/',
    'updateUserById': '/users/',
    'deleteUserById': '/users/',
  }

  create(url, data) {
    return this.httpClient.post(this.api + this.routes[url], data).toPromise();
  }
  get(url) {
    return this.httpClient.get(this.api + this.routes[url]).toPromise();
  }
  getById(url, id) {
    return this.httpClient.get(this.api + this.routes[url] + id).toPromise();
  }
  updateById(url, id, data) {
    return this.httpClient.put(this.api + this.routes[url] + id, data).toPromise();
  }
  deleteById(url, id) {
    return this.httpClient.delete(this.api + this.routes[url] + id).toPromise();
  }

  // private headers = new Headers({
  //   'Authorization': 'Bearer ' + this.adaptifyToken,
  //   'Content-type': 'application/json',
  // });

  // getWorkflowsForDashboard() {
  //   const authorization = new RequestOptions({ headers: this.headers });
  //   return this.http.get(this.adaptifyApi + 'getWorkflowsForDashboard', authorization).toPromise();
  // }
  // getChartData(params) {
  //   const authorization = new RequestOptions({ headers: this.headers });
  //   return this.http.post(this.adaptifyApi + 'getChartData', params, authorization).toPromise();
  // }
}