import { RouterModule, Routes } from "@angular/router";
import { Details } from "./details";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: Details
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DetailsRoutingModule {}
