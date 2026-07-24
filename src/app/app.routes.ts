import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { ApplicationGuard } from './core/guards/application.guard';
import { DashboardGuard } from './core/guards/dashboard-guard';
import { AuthRedirectGuard } from './core/guards/auth-redirect-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  {
    path: "",
    loadChildren: () => import("./core/layout/layout.module").then(m => m.LayoutModule)
  }
];
