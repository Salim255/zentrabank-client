import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LandingRoutingModule } from "./landing-routing.module";
import { LandingComponent } from "./landing.component";
import { DashboardPreviewComponent } from "./components/dashboard-preview/dashboard-preview.component";
import { RecentTransactionsComponent } from "./components/recent-transactions/recent-transactions.component";
import { SpendingChartComponent } from "./components/spending-chart/spending-chart.component";
import { QuickActionsComponent } from "./components/quick-actions/quick-actions.component";
import { BalanceCardComponent } from "./components/balance-card/balance-card.component";
import { LucideAngularModule } from 'lucide-angular';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    LucideAngularModule
  ],
  declarations: [
    BalanceCardComponent,
    QuickActionsComponent,
    SpendingChartComponent,
    RecentTransactionsComponent,
    DashboardPreviewComponent,
    LandingComponent]
})

export class LandingModule{}
