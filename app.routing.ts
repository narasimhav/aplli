import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/services/auth/auth.guard';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'blank',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'sessions',
        loadChildren: './views/sessions/sessions.module#SessionsModule',
        data: { title: 'Session'}
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'blank',
        loadChildren: './views/others/others.module#OthersModule',
        data: { title: 'Others', breadcrumb: 'OTHERS'}
      }
    ]
  },
    {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'humanResource',
        loadChildren: './human-resources/human-resource.module#HumanResourceModule',
        data: { title: 'HumanResource', breadcrumb: 'HUMANRESOURCE'}
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'IBA',
        loadChildren: './newCenterRequest/new-center-request.module#NewCenterRequestModule',
        // data: { title: 'center', breadcrumb: 'center'}
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'head/:id',
        loadChildren: './head-admin/head-admin.module#HeadAdminModule',
        data: { title: 'headadmin', breadcrumb: 'headadmin'}
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'back/:id',
        loadChildren: './backend/backend.module#BackendModule',
        data: { title: 'backend', breadcrumb: 'backend'}
      }
    ]
  },
  {  path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'front/:id',
        loadChildren: './front-end/front-end.module#FrontEndModule',
        data: { title: 'front-end', breadcrumb: 'front-end'}
      }
    ]
  },
    {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'centermanagement',
        loadChildren: './centermanagement/centermanagement.module#AppRoutingModule',
        data: { title: 'centermanagement', breadcrumb: 'centermanagement'}
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'visitingRequest',
        loadChildren: './visitingrequest/visitingrequest.module#VisitingrequestModule',
        data: { title: 'visitingRequest', breadcrumb: 'visitingRequest'}
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'sessions/404'
  }
];

