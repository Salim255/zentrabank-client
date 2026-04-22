import { NgModule } from "@angular/core";
import { AccountRoutingModule } from "./account-routing.module";
import { AccountPage } from "./account.page";
import { AccountHeaderComponent } from "./components/account-header/account-header.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [AccountRoutingModule, CommonModule],
  declarations: [AccountPage,AccountHeaderComponent]
})

export class AccountModule {}
