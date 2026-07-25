import { NgModule } from "@angular/core";
import { HistoryPage } from "./history.page";
import { HistoryRoutingModule } from "./history-routing.module";
import { SharedModule } from "../../../../shared/shared.module";
import { LucideAngularModule } from "lucide-angular";
import { TransactionItemComponent } from "./components/transaction-item/transaction-item.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports:[
    CommonModule,
    LucideAngularModule,
    SharedModule,
    HistoryRoutingModule
  ],
  declarations: [HistoryPage, TransactionItemComponent]
})

export class HistoryModule{}
