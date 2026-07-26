import { NgModule } from "@angular/core";
import { AccountsRoutingModule } from "./accounts-routing.module";
import { Accounts } from "./accounts";
import { AccountItemComponent } from "./components/account-item/account-item.component";
import { CommonModule } from "@angular/common";
import { AccountsListComponent } from "./components/accounts-list/accounts-list.component";
import { SharedModule } from "../../shared/shared.module";
import { LucideAngularModule } from "lucide-angular";
import { AccountsLayoutComponent } from "./components/accounts-layout/accounts-layout.component";

@NgModule({
  imports: [
    LucideAngularModule,
    SharedModule,
    CommonModule,
    AccountsRoutingModule,
  ],
  declarations: [
    AccountsLayoutComponent,
    AccountsListComponent,
    Accounts,
    AccountItemComponent,
  ]
})

export class AccountsModule {}
