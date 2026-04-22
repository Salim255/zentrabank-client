import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { Dashboard } from "./dashboard";
import { SubHeaderComponent } from "./components/sub-header/sub-header.component";
import { HeroComponent } from "./components/hero/hero.component";
import { HeroNavbarComponent } from "./components/hero-navbar/hero-navbar.component";

@NgModule({
  declarations: [
    HeroNavbarComponent,
    HeroComponent,
    SubHeaderComponent,
    Dashboard,
   ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
})
export class DashboardModule {}
