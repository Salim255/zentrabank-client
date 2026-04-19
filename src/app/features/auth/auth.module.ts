import { NgModule } from "@angular/core";
import { Auth } from "./auth";
import { AuthRoutingModule } from "./auth-routing.module";
import { CommonModule } from "@angular/common";
import { LoginPage } from "./pages/login/login.page";
import { LoginFormComponent } from "./pages/login/components/login-form/login-form.component";
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
    AuthRoutingModule,
  ],
  declarations: [
    LoginFormComponent,
    LoginPage,
    Auth
  ],
})
export class AuthModule {}
