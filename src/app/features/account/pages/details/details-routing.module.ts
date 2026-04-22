import { RouterModule, Routes } from "@angular/router";
import { DetailsPage } from "./details.page";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: DetailsPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DetailsRoutingModule {}
