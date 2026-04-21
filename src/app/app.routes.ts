import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { ApplicationGuard } from './core/guards/application.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "application",
    canActivate: [AuthGuard, ApplicationGuard],
    loadChildren: () => import('./features/application/application.module').then((m) => m.ApplicationModule)
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard, ApplicationGuard],
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];
