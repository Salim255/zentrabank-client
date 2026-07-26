import { NgModule } from "@angular/core";
import { HistoryPage } from "./history.page";
import { HistoryRoutingModule } from "./history-routing.module";
import { SharedModule } from "../../../../shared/shared.module";
import { LucideAngularModule } from "lucide-angular";
import { TransactionItemComponent } from "./components/transaction-item/transaction-item.component";
import { CommonModule } from "@angular/common";
import { TransactionSummaryComponent } from "./components/transaction-summary/transaction-summary.component";
import { TransactionCardComponent } from "./components/transaction-card/transaction-card.component";
import { TransactionsHeaderComponent } from "./components/transaction-header/transaction-header.component";

@NgModule({
  imports:[
    CommonModule,
    LucideAngularModule,
    SharedModule,
    HistoryRoutingModule
  ],
  declarations: [
    HistoryPage,
    TransactionsHeaderComponent,
    TransactionCardComponent,
    TransactionSummaryComponent,
    TransactionItemComponent,
  ]
})

export class HistoryModule{}
