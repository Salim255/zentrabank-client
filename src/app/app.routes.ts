import { Routes } from '@angular/router';
import { applicationGuard } from './core/guards/application.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "application",
    canActivate: [applicationGuard],
    loadChildren: () => import('./features/application/application.module').then((m) => m.ApplicationModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];
