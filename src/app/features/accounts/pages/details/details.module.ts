import { NgModule } from "@angular/core";
import { DetailsRoutingModule } from "./details-routing.module";
import { Details } from "./details";

@NgModule({
  imports:[DetailsRoutingModule],
  declarations: [Details]
})

export class DetailsModule {}
