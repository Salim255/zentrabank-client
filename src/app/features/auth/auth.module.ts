import { NgModule } from "@angular/core";
import { Auth } from "./auth";
import { AuthRoutingModule } from "./auth-routing.module";
import { CommonModule } from "@angular/common";
import { LoginPage } from "./pages/login/login.page";
import { LoginFormComponent } from "./pages/login/components/login-form/login-form.component";
import { SignupPage } from "./pages/signup/signup.page";
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { IonicModule } from "@ionic/angular";
import { SignupFormComponent } from "./pages/signup/components/signup-form/signup-form.component";
import { InstructionsComponent } from "./pages/signup/components/instructions/instructions.component";
import { CreateAccountFormComponent } from "../accounts/components/create-account-form/create-account-form.component";

@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ],
  declarations: [
    CreateAccountFormComponent,
    LoginFormComponent,
    SignupFormComponent,
    InstructionsComponent,
    SignupPage,
    LoginPage,
    Auth
  ],
})
export class AuthModule {}
