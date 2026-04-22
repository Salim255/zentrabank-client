import { NgModule } from "@angular/core";
import { AccountsListRoutingModule } from "./accounts-list-routing.module";
import { AccountsListPage } from "./accounts-list.page";

@NgModule({
  imports: [AccountsListRoutingModule],
  declarations: [AccountsListPage]
})

export class AccountsListModule {}
