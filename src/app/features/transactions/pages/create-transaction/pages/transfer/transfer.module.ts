import { NgModule } from "@angular/core";
import { TransferPage } from "./transfer.page";
import { TransferRoutingModule } from "./transfer-routing.module";
import { FormComponent } from "./components/form/form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [FormComponent, TransferPage],
  imports: [
    ReactiveFormsModule,
    TransferRoutingModule,
    FormsModule]
})

export class TransferModule{}
