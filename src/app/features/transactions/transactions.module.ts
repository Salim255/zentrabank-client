import { NgModule } from "@angular/core";
import { Transactions } from "./transactions";
import { TransactionsRoutingModule } from "./transactions-routing.module";
import { CurrencyPipe } from "@angular/common";

@NgModule({
  declarations: [
    Transactions
  ],
  imports: [
    CurrencyPipe,
    TransactionsRoutingModule
  ]
})

export class TransactionsModule {}
