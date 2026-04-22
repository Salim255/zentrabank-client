import { NgModule } from "@angular/core";
import { AccountsRoutingModule } from "./accounts-routing.module";
import { Accounts } from "./accounts";
import { AccountItemComponent } from "./components/account-item/account-item.component";
import { CommonModule } from "@angular/common";
import { AccountsListComponent } from "./components/accounts-list/accounts-list.component";

@NgModule({
  imports: [
    CommonModule,
    AccountsRoutingModule,
  ],
  declarations: [
    AccountsListComponent,
    Accounts,
    AccountItemComponent,
  ]
})

export class AccountsModule {}
