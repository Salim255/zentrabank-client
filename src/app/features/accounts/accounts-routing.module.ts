import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Accounts } from "./accounts";
import { AccountsListComponent } from "./components/accounts-list/accounts-list.component";



const routes:Routes = [
  {
    path: "",
    component: Accounts
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AccountsRoutingModule {}
