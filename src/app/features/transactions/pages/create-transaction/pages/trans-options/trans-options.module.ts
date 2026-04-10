import { NgModule } from "@angular/core";
import { TransOptionsRoutingModule } from "./trans-options-routing.module";
import { TransOptionsPage } from "./trans-options.page";

@NgModule({
  imports:[TransOptionsRoutingModule],
  declarations: [TransOptionsPage]
})

export class TransOptionsModule {}
