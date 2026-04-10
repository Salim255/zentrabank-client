import { NgModule } from "@angular/core";
import { DepositRoutingModule } from "./deposit-routing.module";
import { DepositPage } from "./deposit.page";

@NgModule({
  imports: [DepositRoutingModule],
  declarations: [DepositPage]
})

export class DepositModule {}
