import { NgModule } from "@angular/core";
import { Transactions } from "./transactions";
import { TransactionsRoutingModule } from "./transactions-routing.module";
import { TransactionHeaderComponent } from "./components/transaction-header/transaction-header.component";
import { CurrencyPipe } from "@angular/common";

@NgModule({
  declarations: [
    TransactionHeaderComponent,
    Transactions
  ],
  imports: [
    CurrencyPipe,
    TransactionsRoutingModule
  ]
})

export class TransactionsModule {}
