import { NgModule } from "@angular/core";
import { AccountsRoutingModule } from "./accounts-routing.module";
import { Accounts } from "./accounts";

@NgModule({
  imports: [AccountsRoutingModule],
  declarations: [Accounts]
})

export class AccountsModule {}
