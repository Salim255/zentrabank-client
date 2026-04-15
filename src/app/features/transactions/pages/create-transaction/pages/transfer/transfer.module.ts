import { NgModule } from "@angular/core";
import { TransferPage } from "./transfer.page";
import { TransferRoutingModule } from "./transfer-routing.module";
import { FormComponent } from "./components/form/form.component";

@NgModule({
  declarations: [FormComponent, TransferPage],
  imports: [TransferRoutingModule]
})

export class TransferModule{}
