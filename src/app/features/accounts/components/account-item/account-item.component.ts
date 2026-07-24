import { Component, Input } from "@angular/core";
import { AccountDto } from "../../model/account.model";
import { Router } from "@angular/router";
import { ArrowRight, Wallet } from "lucide-angular";

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
  constructor(private router: Router){}

  onOverview(){
    this.router.navigate(["/dashboard/account"])
  }
}
