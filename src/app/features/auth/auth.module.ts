import { NgModule } from "@angular/core";
import { Auth } from "./auth";
import { AuthRoutingModule } from "./auth-routing.module";
import { CommonModule } from "@angular/common";
import { LoginPage } from "./pages/login/login.page";
import { AuthFormComponent } from "./components/auth-form/auth-form.component";
import { SignupPage } from "./pages/signup/signup.page";
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { IonicModule } from "@ionic/angular";

@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [
    AuthFormComponent,
    SignupPage,
    LoginPage,
    Auth
  ],
})
export class AuthModule {}
