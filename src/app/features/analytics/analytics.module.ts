import { NgModule } from "@angular/core";
import { Analytics } from "./analytics";
import { AnalyticsRoutingModule } from "./analytics-routing.module";

@NgModule({
  declarations: [Analytics],
  imports: [AnalyticsRoutingModule]
})

export class AnalyticsModule {}
