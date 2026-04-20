import { NgModule } from "@angular/core";
import { SignupRoutingModule } from "./signup-routing.module";
import { SignupPage } from "./signup.page";
import { SharedModule } from "../../../../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SignupFormComponent } from "./components/signup-form/signup-form.component";

@NgModule({
  declarations: [
    SignupFormComponent,
    SignupPage
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    SignupRoutingModule
  ]
})

export class SignupModule {}
