import { RouterModule, Routes } from "@angular/router";
import { CreateTransactionPage } from "./create-transaction.page";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: CreateTransactionPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CreateTransactionRoutingModule {}
