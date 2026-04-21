import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { ApplicationGuard } from './core/guards/application.guard';
import { DashboardGuard } from './core/guards/dashboard-guard';
import { AuthRedirectGuard } from './core/guards/auth-redirect-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
    canMatch: [AuthRedirectGuard]
  },
  {
    path: "application",
    loadChildren: () => import('./features/application/application.module').then((m) => m.ApplicationModule),
    canActivate: [AuthGuard, ApplicationGuard]
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard,  DashboardGuard],
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];
