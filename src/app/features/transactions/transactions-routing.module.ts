import { RouterModule, Routes } from "@angular/router";
import { Transactions } from "./transactions";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: Transactions,
    children: [
      {
        path: "",
        pathMatch: "full",
        loadChildren: () => import("./pages/create-transaction/create-transaction.module").then((m) => m.CreateTransactionModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export  class TransactionsRoutingModule {}
