import { Component, OnInit } from '@angular/core';

// import { AuthService } from '@app/services/auth/auth.service';
// import { ApiService } from '@app/services/api/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  userFullname: any;
  lastlogintime: any;
  activeNav: string;
  
  constructor(
    // private oAuth: AuthService,
    // private api: ApiService,
  ) { }

  ngOnInit() {
    // this.api.lastLoginDetails().then(res => {
    //   this.userFullname = res['userFullname'];
    //   this.lastlogintime = res['lastlogintime'];
    // })
  }
  // logout(){
  //   this.oAuth.logout();
  // }
}
