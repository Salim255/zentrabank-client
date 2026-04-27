import { NgModule } from "@angular/core";
import { Transactions } from "./transactions";
import { TransactionsRoutingModule } from "./transactions-routing.module";
import { TransactionHeaderComponent } from "./components/transaction-header/transaction-header.component";

@NgModule({
  declarations: [
    TransactionHeaderComponent,
    Transactions
  ],
  imports: [
    TransactionsRoutingModule
  ]
})

export class TransactionsModule {}
