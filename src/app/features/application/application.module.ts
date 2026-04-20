import { NgModule } from "@angular/core";
import { ApplicationRoutingModule } from "./application-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ApplicationPage } from "./application.page";
import { SharedModule } from "../../shared/shared.module";
import { ApplicationFormComponent } from "./components/application-form/application-form.component";
import { ReviewComponent } from "./components/review/review.component";

@NgModule({
  imports: [
    ApplicationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule
  ],
  declarations: [
    ApplicationFormComponent,
    ApplicationPage,
    ReviewComponent
  ],
})

export class ApplicationModule {}
