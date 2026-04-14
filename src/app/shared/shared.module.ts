import { NgModule } from "@angular/core";
import { FormErrorComponent } from "./components/form-error/form-error.component";
import { CommonModule } from "@angular/common";
import { AppNameComponent } from "./components/app-name/app-name.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LanguageComponent } from "./components/language/language.component";

@NgModule({
  declarations: [
    FormErrorComponent,
    NavbarComponent,
    AppNameComponent,
    LanguageComponent],
  imports: [CommonModule],
  exports: [
    FormErrorComponent,
    AppNameComponent,
     NavbarComponent,
     LanguageComponent]
})
export class SharedModule {}
