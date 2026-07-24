import { NgModule } from "@angular/core";
import { FormErrorComponent } from "./components/form-error/form-error.component";
import { CommonModule, NgComponentOutlet } from "@angular/common";
import { AppNameComponent } from "./components/app-name/app-name.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LanguageComponent } from "./components/language/language.component";
import { InstructionsComponent } from "./components/instructions/instructions.component";
import { AppButtonComponent } from "./kits/app-button/app-button.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { RouterModule } from "@angular/router";
import { AppInputComponent } from "./kits/app-input/app-input.component";
import { LucideAngularModule } from "lucide-angular";

@NgModule({
  declarations: [
    AppInputComponent,
    HeaderComponent,
    FooterComponent,
    AppButtonComponent,
    InstructionsComponent,
    FormErrorComponent,
    NavbarComponent,
    AppNameComponent,
    LanguageComponent],
  imports: [
    LucideAngularModule,
    RouterModule,
    CommonModule,
  ],
  exports: [
    AppInputComponent,
    HeaderComponent,
    FooterComponent,
    AppButtonComponent,
    NgComponentOutlet,
    InstructionsComponent,
    FormErrorComponent,
    AppNameComponent,
    NavbarComponent,
    LanguageComponent]
})
export class SharedModule {}
