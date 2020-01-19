import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AuthGuard } from '@app/core/guard/auth.guard';

import { SHARED_MODULES, COMPONENT_DECLARATIONS } from '@app/app.common';

import { PrivateComponent } from '@app/private/private.component';
import { WorkspaceComponent } from '@app/private/workspace/workspace.component';

import { AdminComponent } from '@app/private/admin/admin.component';

import { DashboardsComponent, DashboardPushDialog } from '@app/private/admin/dashboards/dashboards.component';


const routes: Routes = [
  {
    path: 'app',
    canActivate: [AuthGuard],
    data: { roles: ['USER'] },
    component: PrivateComponent,
    children: [
      { path: 'workspace', component: WorkspaceComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'workspace' }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ADMIN'] },
    children: [
      { path: 'dashboards', component: DashboardsComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'templates' }
    ]
  },
];

export const appRouting = RouterModule.forChild(routes);

@NgModule({
  declarations: [
    ...COMPONENT_DECLARATIONS,
    DashboardsComponent,
    WorkspaceComponent,
    PrivateComponent,
    AdminComponent,
    DashboardPushDialog,
  ],
  imports: [
    ...SHARED_MODULES,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CommonModule,
    appRouting
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [
    ...COMPONENT_DECLARATIONS,
    DashboardPushDialog,
  ]
})
export class PrivateModule { }
