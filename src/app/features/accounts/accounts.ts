import { Component } from "@angular/core";
import { AccountService } from "./services/account.service";
import { Subscription } from "rxjs";
import { AccountDto } from "./model/account.model";

@Component({
    selector: "app-accounts",
    templateUrl: "./accounts.html",
    styleUrls: ["./accounts.scss"],
    standalone: false
})
export class Accounts {
  accounts: AccountDto[] = [];
  accountsSubscription!: Subscription;
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.subscribeToAccounts();
  }

  subscribeToAccounts(){
    this.accountsSubscription = this.accountService.getUserAccounts().subscribe(
      accounts =>{
        this.accounts = [...accounts];
      }
    );
  }

  ngOnDestroy(): void {
    this.accountsSubscription?.unsubscribe();
  }
}
