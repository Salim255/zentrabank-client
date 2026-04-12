import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { Dashboard } from "./dashboard";
import { SubHeaderComponent } from "./components/sub-header/sub-header.component";
import { HeroComponent } from "./components/hero/hero.component";

@NgModule({
  declarations: [
    HeroComponent,
    SubHeaderComponent,
    Dashboard,
    NavbarComponent
   ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
})
export class DashboardModule {}
