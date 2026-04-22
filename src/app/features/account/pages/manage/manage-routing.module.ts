import { RouterModule, Routes } from "@angular/router";
import { ManagePage } from "./manage.page";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: ManagePage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ManageRoutingModule {}
