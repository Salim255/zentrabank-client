import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { LayoutRoutingModule } from "./layout-routing.module";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [CommonModule, LayoutRoutingModule, SharedModule],
  declarations: [LayoutComponent]
})

export class LayoutModule {}
