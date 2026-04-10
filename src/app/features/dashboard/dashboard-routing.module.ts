import { RouterModule, Routes } from "@angular/router";
import { Dashboard } from "./dashboard";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: Dashboard,
    children: [
      {
        path: "accounts",
        loadChildren:() => import("../accounts/accounts.module").then((m) =>m.AccountsModule)
      },
      {
        path: "transactions",
        loadChildren: () => import("../transactions/transactions.module").then((m) =>m.TransactionsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
