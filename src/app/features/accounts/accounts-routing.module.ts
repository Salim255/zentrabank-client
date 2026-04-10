import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Accounts } from "./accounts";
import { DetailsPage } from "./pages/details/details.page";

const routes:Routes = [
  {
    path: "",
    component: Accounts,
    children: [
      {
        path: "details",
        component: DetailsPage
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AccountsRoutingModule {}
