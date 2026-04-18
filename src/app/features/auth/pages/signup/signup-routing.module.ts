import { RouterModule, Routes } from "@angular/router";
import { SignupPage } from "./signup.page";
import { NgModule } from "@angular/core";
import { SignupFormComponent } from "./components/signup-form/signup-form.component";
import { CreateAccountFormComponent } from "../../../accounts/components/create-account-form/create-account-form.component";

const routes: Routes = [
  {
    path: "",
    component: SignupPage,
    children: [
       {
        path: '',
        redirectTo: 'register',
        pathMatch: 'full'
      },
      {
        path: "register",
        component: SignupFormComponent
      },
      {
        path: "application",
        component: CreateAccountFormComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SignupRoutingModule {}
