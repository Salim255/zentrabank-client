import { NgModule } from "@angular/core";
import { DetailsRoutingModule } from "./details-routing.module";
import { DetailsPage } from "./details.page";

@NgModule({
  imports:[DetailsRoutingModule],
  declarations: [DetailsPage]
})

export class DetailsModule {}
