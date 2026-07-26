import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Accounts } from "./accounts";
import { AccountsLayoutComponent } from "./components/accounts-layout/accounts-layout.component";


const routes:Routes = [
  {
    path: "",
    component: Accounts,
    children: [
      {
        path: "",
        component: AccountsLayoutComponent ,
        pathMatch: "full"
      },
      {
        path: "account",
        loadChildren: () => import("../account/account.page.module").then(m => m.AccountModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AccountsRoutingModule {}
