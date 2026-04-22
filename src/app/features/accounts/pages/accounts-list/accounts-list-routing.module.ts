import { RouterModule, Routes } from "@angular/router";
import { AccountsListPage } from "./accounts-list.page";
import { NgModule } from "@angular/core";

const routes: Routes = [{
  path: "",
  component: AccountsListPage
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AccountsListRoutingModule {}
