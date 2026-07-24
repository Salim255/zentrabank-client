import { Component, Input } from "@angular/core";
import { AccountDto } from "../../model/account.model";
import { Router } from "@angular/router";
import { ArrowRight, Wallet } from "lucide-angular";
import { AccountItemService } from "../../../account/pages/account-item.service";

@Component({
  selector: "app-account-item",
  templateUrl: "./account-item.component.html",
  styleUrls: ["./account-item.component.scss"],
  standalone: false
})
export class AccountItemComponent {
  @Input() account!: AccountDto;
  Wallet = Wallet;
  ArrowRight = ArrowRight;

  constructor(
    private accountItemService: AccountItemService,
    private router: Router
  ){}

  onOverview(){
    this.accountItemService.setAccountItem(this.account);
    this.router.navigate(["/dashboard/account"])
  }
}
