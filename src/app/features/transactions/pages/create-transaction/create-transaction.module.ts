import { NgModule } from "@angular/core";
import { CreateTransactionPage } from "./create-transaction.page";
import { CreateTransactionRoutingModule } from "./create-transaction-routing.module";

@NgModule({
  declarations: [CreateTransactionPage],
  imports: [CreateTransactionRoutingModule]
})

export class CreateTransactionModule {}
