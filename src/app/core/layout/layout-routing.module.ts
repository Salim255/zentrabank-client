import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { AuthRedirectGuard } from "../guards/auth-redirect-guard";
import { ApplicationGuard } from "../guards/application.guard";
import { DashboardGuard } from "../guards/dashboard-guard";
import { AuthGuard } from "../guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "landing",
        loadChildren: () => import('../../features/landing/landing.module').then(m => m.LandingModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('../../features/auth/auth.module').then(m => m.AuthModule),
        canMatch: [AuthRedirectGuard]
      },
      {
        path: "application",
        loadChildren: () => import('../../features/application/application.module').then((m) => m.ApplicationModule),
        canActivate: [AuthGuard, ApplicationGuard]
      },
      {
        path: 'dashboard',
        canActivate: [AuthGuard,  DashboardGuard],
        loadChildren: () => import('../../features/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LayoutRoutingModule {}
