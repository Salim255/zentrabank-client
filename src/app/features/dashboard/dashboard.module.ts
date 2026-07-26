import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { CommonModule } from "@angular/common";
import { Dashboard } from "./dashboard";
import { HeroComponent } from "./components/hero/hero.component";
import { HeroNavbarComponent } from "./components/hero-navbar/hero-navbar.component";

@NgModule({
  declarations: [
    HeroNavbarComponent,
    HeroComponent,
    Dashboard,
   ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
})
export class DashboardModule {}
