import { NgModule } from "@angular/core";
import { DepositRoutingModule } from "./deposit-routing.module";
import { DepositPage } from "./deposit.page";
import { CommonModule } from "@angular/common";
import { LucideAngularModule } from "lucide-angular";
import { SharedModule } from "../../../../../../shared/shared.module";

@NgModule({
  imports: [LucideAngularModule, CommonModule, DepositRoutingModule, SharedModule],
  declarations: [DepositPage]
})

export class DepositModule {}
