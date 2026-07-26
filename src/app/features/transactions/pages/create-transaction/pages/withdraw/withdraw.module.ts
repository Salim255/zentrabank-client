import { NgModule } from "@angular/core";
import { WithdrawRoutingModule } from "./withdraw-routing.module";
import { WithdrawPage } from "./withdraw.page";
import { SharedModule } from "../../../../../../shared/shared.module";
import { CommonModule } from "@angular/common";
import { LucideAngularModule } from "lucide-angular";

@NgModule({
  imports: [LucideAngularModule, CommonModule, SharedModule, WithdrawRoutingModule],
  declarations: [WithdrawPage]
})

export class WithdrawModule {}
