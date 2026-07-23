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
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { FeaturesComponent } from "./components/features/features.component";

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    LucideAngularModule
  ],
  declarations: [
    FeaturesComponent,
    HeroSectionComponent,
    BalanceCardComponent,
    QuickActionsComponent,
    SpendingChartComponent,
    RecentTransactionsComponent,
    DashboardPreviewComponent,
    LandingComponent]
})

export class LandingModule{}
