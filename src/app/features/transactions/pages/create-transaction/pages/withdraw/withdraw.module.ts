import { NgModule } from "@angular/core";
import { WithdrawRoutingModule } from "./withdraw-routing.module";
import { WithdrawPage } from "./withdraw.page";

@NgModule({
  imports: [WithdrawRoutingModule],
  declarations: [WithdrawPage]
})

export class WithdrawModule {}
