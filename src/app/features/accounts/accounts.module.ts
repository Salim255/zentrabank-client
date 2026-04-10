import { NgModule } from "@angular/core";
import { AccountsRoutingModule } from "./accounts-routing.module";
import { Accounts } from "./accounts";
import { AccountHeaderComponent } from "./components/account-header/account-header.component";

@NgModule({
  imports: [AccountsRoutingModule],
  declarations: [Accounts, AccountHeaderComponent]
})

export class AccountsModule {}
