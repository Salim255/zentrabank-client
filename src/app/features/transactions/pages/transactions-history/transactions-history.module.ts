import { NgModule } from "@angular/core";
import { TransactionsHistoryPage } from "./transactions-history.page";
import { TransactionsHistoryRoutingModule } from "./transactions-history-routing.module";
import { HistoryHeaderComponent } from "./components/history-header/history-header.component";
import { HistoryFilterComponent } from "./components/history-filter/history-filter.component";
import { HistoryItemComponent } from "./components/history-item/history-item.component";
import { CurrencyPipe, DatePipe } from "@angular/common";
import { SharedModule } from "../../../../shared/shared.module";

@NgModule({
  declarations: [
    HistoryItemComponent,
    HistoryFilterComponent,
    HistoryHeaderComponent,
    TransactionsHistoryPage,
  ],
  imports: [
    CurrencyPipe,
    SharedModule,
    TransactionsHistoryRoutingModule
  ]
})

export class TransactionsHistoryModule {}
