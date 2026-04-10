import { NgModule } from "@angular/core";
import { Analytics } from "./analytics";
import { AnalyticsRoutingModule } from "./analytics-routing.module";
import { BalanceChartComponent } from "./components/balance-chart.component";

@NgModule({
  declarations: [Analytics, BalanceChartComponent],
  imports: [AnalyticsRoutingModule]
})

export class AnalyticsModule {}
