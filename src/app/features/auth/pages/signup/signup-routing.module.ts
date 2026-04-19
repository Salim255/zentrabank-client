import { RouterModule, Routes } from "@angular/router";
import { SignupPage } from "./signup.page";
import { NgModule } from "@angular/core";
import { SignupFormComponent } from "./components/signup-form/signup-form.component";

const routes: Routes = [
  {
    path: "",
    component: SignupPage,
    children: [
       {
        path: '',
        component: SignupFormComponent,
        pathMatch: 'full'
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SignupRoutingModule {}
