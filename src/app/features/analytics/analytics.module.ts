import { NgModule } from "@angular/core";
import { Analytics } from "./analytics";
import { AnalyticsRoutingModule } from "./analytics-routing.module";
import { BalanceChartComponent } from "./components/balance-chart.component";
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [Analytics, BalanceChartComponent],
  imports: [NgApexchartsModule, AnalyticsRoutingModule]
})

export class AnalyticsModule {}
