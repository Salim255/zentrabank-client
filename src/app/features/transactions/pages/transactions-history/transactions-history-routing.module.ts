import { RouterModule, Routes } from "@angular/router";
import { TransactionsHistoryPage } from "./transactions-history.page";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: TransactionsHistoryPage
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TransactionsHistoryRoutingModule {}
