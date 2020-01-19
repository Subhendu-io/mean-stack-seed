import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SHARED_MODULES } from '@app/app.common';
import { RouterModule, Routes } from '@angular/router';

import { ToastrModule } from 'ngx-toastr';

import { PublicComponent } from '@app/public/public.component';
import { LoginComponent } from '@app/public/login/login.component';
import { RegisterComponent } from '@app/public/register/register.component';


const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
];
export const appRouting = RouterModule.forChild(routes);

@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    ...SHARED_MODULES,
    ToastrModule.forRoot(),
    CommonModule,
    appRouting
  ]
})
export class PublicModule { }
