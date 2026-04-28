import { NgModule } from "@angular/core";
import { TransactionsHistoryPage } from "./transactions-history.page";
import { TransactionsHistoryRoutingModule } from "./transactions-history-routing.module";
import { HistoryHeaderComponent } from "./components/history-header/history-header.component";
import { HistoryFilterComponent } from "./components/history-filter/history-filter.component";
import { HistoryItemComponent } from "./components/history-item/history-item.component";

@NgModule({
  declarations: [
    HistoryItemComponent,
    HistoryFilterComponent,
    HistoryHeaderComponent,
    TransactionsHistoryPage,
  ],
  imports: [TransactionsHistoryRoutingModule]
})

export class TransactionsHistoryModule {}
