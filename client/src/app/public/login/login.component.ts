import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from '@app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private oAuth: AuthService,
    private toastr: ToastrService,
    private ngxLoader: NgxUiLoaderService,
    ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.ngxLoader.stop();
  }

  // login(value) {
  //   this.ngxLoader.start();
  //   this.oAuth.login(value.email, value.password).subscribe(response => {
  //     if (response['access_token']) {
  //       let requestRole = this.isadmin ? 'ADMIN' : 'USER';
  //       this.oAuth.getCurrentUser(requestRole).subscribe(res => {
  //         this.ngxLoader.stop();
  //         if (res['role'] && this.isadmin) {
  //           this.router.navigate(["admin"]);
  //         } else if (res['role'] && !this.isadmin) {
  //           this.router.navigate(["app"]);
  //         } else {
  //           this.switchRole(requestRole);
  //         }
  //       })
  //     } else {
  //       this.ngxLoader.stop();
  //       this.toastr.error('Email-ID or password is invalid!', 'Invalid credentials', {
  //         timeOut: 2000
  //       });
  //     }
  //   })
  // }
  // switchRole(requestRole) {
  //   if(confirm("You don't have access as '" + requestRole + "' would you like to switch the role.")) {
  //     this.ngxLoader.start();
  //     if (requestRole == 'ADMIN') {
  //       this.isadmin = false;
  //       this.oAuth.getCurrentUser('USER').subscribe(response => {
  //         this.ngxLoader.stop();
  //         if (response['role']) {
  //           this.router.navigate(["app"]);
  //         }
  //       })
  //     } else if (requestRole == 'USER') {
  //       this.isadmin = true;
  //       this.oAuth.getCurrentUser('ADMIN').subscribe(response => {
  //         this.ngxLoader.stop();
  //         if (response['role']) {
  //           this.router.navigate(["admin"]);
  //         }
  //       })
  //     }
  //   } else {
  //     this.ngxLoader.stop();
  //     this.oAuth.logout();
  //   }
  // }
}
