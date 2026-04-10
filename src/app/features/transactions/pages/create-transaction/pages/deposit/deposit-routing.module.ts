import { RouterModule, Routes } from "@angular/router";
import { DepositPage } from "./deposit.page";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: DepositPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class  DepositRoutingModule {}
