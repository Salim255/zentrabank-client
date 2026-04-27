import { NgModule } from "@angular/core";
import { TransferPage } from "./transfer.page";
import { TransferRoutingModule } from "./transfer-routing.module";
import { FormComponent } from "./components/form/form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { TransferReviewerComponent } from "./components/review/transfer-reviewer.component";
import { SharedModule } from "../../../../../../shared/shared.module";

@NgModule({
  declarations: [
    TransferReviewerComponent,
    FormComponent,
    TransferPage,
  ],
  imports: [
    CurrencyPipe,
    ReactiveFormsModule,
    TransferRoutingModule,
    FormsModule,
    SharedModule,
    CommonModule
  ]
})

export class TransferModule{}
