import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/core';

const authGuards = {
  canLoad: [AuthGuard],
  canActivateChild: [AuthGuard],
};

export const AppRoutes: Routes = [

  { path: '', loadChildren: () => import('@app/public').then(m => m.PublicModule) },

  { path: 'dashboard', loadChildren: () => import('@app/private').then(m => m.PrivateModule) },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
