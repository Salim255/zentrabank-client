import { NgModule } from "@angular/core";
import { HistoryPage } from "./history.page";
import { HistoryRoutingModule } from "./history-routing.module";

@NgModule({
  imports:[HistoryRoutingModule],
  declarations: [HistoryPage]
})

export class HistoryModule{}
