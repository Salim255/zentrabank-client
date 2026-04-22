import { NgModule } from "@angular/core";
import { AccountRoutingModule } from "./account-routing.module";
import { AccountPage } from "./account.page";
import { AccountHeaderComponent } from "./components/account-header/account-header.component";
import { CommonModule } from "@angular/common";
import { AccountItemComponent } from "./components/account-item/account-item.component";

@NgModule({
  imports: [AccountRoutingModule, CommonModule],
  declarations: [
    AccountItemComponent,
    AccountPage,
    AccountHeaderComponent
  ]
})

export class AccountModule {}
