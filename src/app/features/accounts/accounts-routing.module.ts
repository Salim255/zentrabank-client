import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Accounts } from "./accounts";

const routes:Routes = [
  {
    path: "",
    component: Accounts,
    children: [

    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AccountsRoutingModule {}
