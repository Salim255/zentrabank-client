import { NgModule } from "@angular/core";
import { SignupRoutingModule } from "./signup-routing.module";
import { SignupPage } from "./signup.page";
import { SignupFormComponent } from "./components/signup-form/signup-form.component";
import { InstructionsComponent } from "./components/instructions/instructions.component";
import { SharedModule } from "../../../../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CreateAccountFormComponent } from "../../../accounts/components/create-account-form/create-account-form.component";

@NgModule({
  declarations: [
    CreateAccountFormComponent,
    SignupFormComponent,
    InstructionsComponent,
    SignupPage
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    SignupRoutingModule
  ]
})

export class SignupModule {}
