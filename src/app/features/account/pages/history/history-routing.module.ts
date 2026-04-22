import { RouterModule, Routes } from "@angular/router";
import { HistoryPage } from "./history.page";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: HistoryPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HistoryRoutingModule {}
