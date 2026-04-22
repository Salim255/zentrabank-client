import { RouterModule, Routes } from "@angular/router";
import { Dashboard } from "./dashboard";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: Dashboard,
    children: [
      {
        path: "account",
        loadChildren: () => import("../account/account.page.module").then((m) => m.AccountModule)
      },
      {
        path: "accounts",
        loadChildren:() => import("../accounts/accounts.module").then((m) =>m.AccountsModule)
      },
      {
        path: "transactions",
        loadChildren: () => import("../transactions/transactions.module").then((m) =>m.TransactionsModule)
      },
      {
        path: "analytics",
        loadChildren: () => import("../analytics/analytics.module").then((m) => m.AnalyticsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
