import { NgModule } from "@angular/core";
import { DetailsRoutingModule } from "./details-routing.module";
import { DetailsPage } from "./details.page";
import { SharedModule } from "../../../../shared/shared.module";
import { LucideAngularModule } from "lucide-angular";
import { CurrencyPipe, DatePipe } from "@angular/common";

@NgModule({
  imports:[
    DatePipe,
    CurrencyPipe,
    LucideAngularModule,
    SharedModule,
    DetailsRoutingModule
  ],
  declarations: [DetailsPage]
})

export class DetailsModule {}
