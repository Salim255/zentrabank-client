import { RouterModule, Routes } from "@angular/router";
import { SignupPage } from "./signup.page";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: SignupPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SignupRoutingModule {}
