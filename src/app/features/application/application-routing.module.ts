import { RouterModule, Routes } from "@angular/router";
import { ApplicationPage } from "./application.page";
import { NgModule } from "@angular/core";
import { ApplicationFormComponent } from "./components/application-form/application-form.component";
import { ReviewComponent } from "./components/review/review.component";

const routes: Routes = [
  {
    path: "",
    component: ApplicationPage,
    children: [
      {
        path: "",
        pathMatch: "full",
        component: ApplicationFormComponent
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
