import { Component, OnInit } from '@angular/core';

import { AuthService } from '@app/services/auth/auth.service';
import { ApiService } from '@app/services/api/api.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  activeNav: string;
  userFullname: any;
  lastlogintime: any;

  constructor(
    private oAuth: AuthService,
    private api: ApiService,
  ) { }

  ngOnInit() {
  }
  logOut(){
    // this.oAuth.logout();
  }

}
