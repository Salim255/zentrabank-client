import { RouterModule, Routes } from "@angular/router";
import { TransferPage } from "./transfer.page";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: TransferPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TransferRoutingModule {}
