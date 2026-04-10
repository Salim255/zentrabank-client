import { RouterModule, Routes } from "@angular/router";
import { TransOptionsPage } from "./trans-options.page";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: TransOptionsPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TransOptionsRoutingModule{}
