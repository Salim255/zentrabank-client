import { RouterModule, Routes } from "@angular/router";
import { CreateTransactionPage } from "./create-transaction.page";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: CreateTransactionPage,
    children: [
      {

        path: "",
        pathMatch: "full",
        loadChildren: () => import("./pages/trans-options/trans-options.module").then((m) => m.TransOptionsModule)
      },
      {
        path: "transfer",
        loadChildren: () => import("./pages/transfer/transfer.module").then((m) => m.TransferModule)
      },
      {
        path: "deposit",
        loadChildren:() => import("./pages//deposit/deposit.module").then((m) => m.DepositModule)
      },
      {
        path: "withdraw",
        loadChildren: () => import("./pages/withdraw/withdraw.module").then((m) => m.WithdrawModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CreateTransactionRoutingModule {}
