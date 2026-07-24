import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { LayoutRoutingModule } from "./layout-routing.module";

@NgModule({
  imports: [CommonModule, LayoutRoutingModule],
  declarations: [LayoutComponent]
})

export class LayoutModule {}
