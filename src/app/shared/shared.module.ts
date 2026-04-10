import { NgModule } from "@angular/core";
import { FormErrorComponent } from "./components/form-error/form-error.component";
import { CommonModule } from "@angular/common";
import { AppNameComponent } from "./components/app-name/app-name.component";

@NgModule({
  declarations: [FormErrorComponent, AppNameComponent],
  imports: [CommonModule],
  exports: [FormErrorComponent, AppNameComponent]
})
export class SharedModule {}
