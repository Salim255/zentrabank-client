import { RouterModule, Routes } from "@angular/router";
import { ApplicationPage } from "./application.page";
import { NgModule } from "@angular/core";
import { CreateAccountFormComponent } from "./components/create-account-form/create-account-form.component";
import { ReviewComponent } from "./components/review/review.component";

const routes: Routes = [
  {
    path: "",
    component: ApplicationPage,
    children: [
      {
        path: "",
        pathMatch: "full",
        component: CreateAccountFormComponent
      },
      {
        path: "review",
        component: ReviewComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ApplicationRoutingModule {}
