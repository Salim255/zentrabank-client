import { NgModule } from "@angular/core";
import { Auth } from "./auth";
import { AuthRoutingModule } from "./auth-routing.module";
import { CommonModule } from "@angular/common";
import { LoginPage } from "./pages/login/login.page";
import { LoginFormComponent } from "./pages/login/components/form/login-form.component";

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [
    LoginFormComponent,
    LoginPage,
    Auth
  ],
})
export class AuthModule {}
