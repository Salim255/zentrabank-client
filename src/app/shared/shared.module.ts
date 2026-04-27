import { NgModule } from "@angular/core";
import { FormErrorComponent } from "./components/form-error/form-error.component";
import { CommonModule } from "@angular/common";
import { AppNameComponent } from "./components/app-name/app-name.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LanguageComponent } from "./components/language/language.component";
import { InstructionsComponent } from "./components/instructions/instructions.component";
import { BgModalComponent } from "./kits/modals/bg-modal/bg-modal.component";

@NgModule({
  declarations: [
    BgModalComponent,
    InstructionsComponent,
    FormErrorComponent,
    NavbarComponent,
    AppNameComponent,
    LanguageComponent],
  imports: [CommonModule],
  exports: [
    BgModalComponent,
    InstructionsComponent,
    FormErrorComponent,
    AppNameComponent,
    NavbarComponent,
    LanguageComponent]
})
export class SharedModule {}
