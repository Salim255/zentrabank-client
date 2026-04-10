import { NgModule } from "@angular/core";
import { Transactions } from "./transactions";
import { TransactionsRoutingModule } from "./transactions-routing.module";

@NgModule({
  declarations: [Transactions],
  imports: [TransactionsRoutingModule]
})

export class TransactionsModule {}
