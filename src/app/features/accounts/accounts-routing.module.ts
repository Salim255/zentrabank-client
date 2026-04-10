import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Accounts } from "./accounts";
import { Details } from "./pages/details/details";

const routes:Routes = [
  {
    path: "",
    component: Accounts,
    children: [
      {
        path: "details",
        component: Details
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AccountsRoutingModule {}
