import { NgModule } from "@angular/core";
import { TransactionsHistoryPage } from "./transactions-history.page";
import { TransactionsHistoryRoutingModule } from "./transactions-history-routing.module";

@NgModule({
  declarations: [TransactionsHistoryPage],
  imports: [TransactionsHistoryRoutingModule]
})

export class TransactionsHistoryModule {}
