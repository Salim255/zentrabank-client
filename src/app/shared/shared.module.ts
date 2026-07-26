import { NgModule } from "@angular/core";
import { FormErrorComponent } from "./components/form-error/form-error.component";
import { CommonModule, CurrencyPipe, DatePipe, NgComponentOutlet } from "@angular/common";
import { AppNameComponent } from "./components/app-name/app-name.component";
import { LanguageComponent } from "./components/language/language.component";
import { InstructionsComponent } from "./components/instructions/instructions.component";
import { AppButtonComponent } from "./kits/app-button/app-button.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { RouterModule } from "@angular/router";
import { AppInputComponent } from "./kits/app-input/app-input.component";
import { LucideAngularModule } from "lucide-angular";
import { AppSelectComponent } from "./kits/app-select/app-select.component";
import { ClickOutsideDirective } from "./directives/click-outside/click-outside.directive";
import { GlobalNavigationComponent } from "./components/global-navigation/global-navigation.component";
import { FeatureNavigationComponent } from "./components/feature-navigation/feature-navigation.component";

@NgModule({
  declarations: [
    FeatureNavigationComponent,
    GlobalNavigationComponent,
    ClickOutsideDirective,
    AppSelectComponent,
    AppInputComponent,
    HeaderComponent,
    FooterComponent,
    AppButtonComponent,
    InstructionsComponent,
    FormErrorComponent,
    AppNameComponent,
    LanguageComponent],
  imports: [
    CurrencyPipe,
    LucideAngularModule,
    DatePipe,
    RouterModule,
    CommonModule,
  ],
  exports: [
    FeatureNavigationComponent,
    GlobalNavigationComponent,
    DatePipe,
    LucideAngularModule,
    ClickOutsideDirective,
    AppSelectComponent,
    AppInputComponent,
    HeaderComponent,
    FooterComponent,
    AppButtonComponent,
    NgComponentOutlet,
    InstructionsComponent,
    FormErrorComponent,
    AppNameComponent,
    LanguageComponent]
})
export class SharedModule {}
