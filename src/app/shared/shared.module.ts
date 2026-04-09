import { NgModule } from "@angular/core";
import { FormErrorComponent } from "./components/form-error/form-error.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [FormErrorComponent],
  imports: [CommonModule],
  exports: [FormErrorComponent]
})
export class SharedModule {}
