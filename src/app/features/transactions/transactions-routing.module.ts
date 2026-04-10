import { RouterModule, Routes } from "@angular/router";
import { Transactions } from "./transactions";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: Transactions,
    children: [
      {
        path: "transfer",
        loadChildren: () => import("./pages/create-transaction/create-transaction.module").then((m) => m.CreateTransactionModule)
      },
      {
        path: "history",
        loadChildren: () => import("./pages//transactions-history/transactions-history.module").then((m) => m.TransactionsHistoryModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export  class TransactionsRoutingModule {}
