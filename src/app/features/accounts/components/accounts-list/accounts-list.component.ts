import { Component, Input } from "@angular/core";
import { AccountDto } from "../../model/account.model";

@Component({
  selector: "app-accounts-list",
  templateUrl: "./accounts-list.component.html",
  styleUrls: ["./accounts-list.component.scss"],
  standalone: false
})
export class AccountsListComponent {
  @Input() accounts!: AccountDto [];
  constructor(){}

}
