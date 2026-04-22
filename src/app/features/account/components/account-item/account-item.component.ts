import { Component, Input } from "@angular/core";
import { AccountDto } from "../../../accounts/model/account.model";

@Component({
  selector: "app-account-item",
  templateUrl: "./account-item.component.html",
  styleUrls: ["./account-item.component.scss"],
  standalone: false
})
export class AccountItemComponent {
  @Input() account!: AccountDto;
}
