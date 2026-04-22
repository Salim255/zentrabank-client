import { Component } from "@angular/core";
import { AccountService } from "./services/account.service";
import { Subscription } from "rxjs";

@Component({
    selector: "app-accounts",
    templateUrl: "./accounts.html",
    styleUrls: ["./accounts.scss"],
    standalone: false
})
export class Accounts {
  accountsSubscription!: Subscription;
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.subscribeToAccounts();
  }

  subscribeToAccounts(){
    this.accountsSubscription = this.accountService.getUserAccounts().subscribe(
      accounts => console.log(accounts, "Hello")
    );
  }

  ngOnDestroy(): void {
    this.accountsSubscription?.unsubscribe();
  }
}
