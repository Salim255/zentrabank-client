import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Accounts } from "./accounts";
import { AccountsListPage } from "./pages/accounts-list/accounts-list.page";


const routes:Routes = [
  {
    path: "",
    component: Accounts,
    children: [
      {
        path: "",
        pathMatch: "full",
        component: AccountsListPage
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AccountsRoutingModule {}
