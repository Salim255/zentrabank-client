import { Component, Input, signal, SimpleChanges } from "@angular/core";
import { AccountDto } from "../../model/account.model";
import { Subscription } from "rxjs";
import { AccountService } from "../../services/account.service";

@Component({
  selector: "app-accounts-list",
  templateUrl: "./accounts-list.component.html",
  styleUrls: ["./accounts-list.component.scss"],
  standalone: false
})
export class AccountsListComponent {
  accounts = signal<AccountDto[]>([]);
  accountsSubscription!: Subscription;
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.subscribeToAccounts();
  }

  subscribeToAccounts(){
    this.accountsSubscription = this.accountService.getUserAccounts().subscribe(
      accounts =>{
        this.accounts.set([...accounts]);
        console.log(this.accounts(), "hello");
      }
    );
  }

  ngOnDestroy(): void {
    this.accountsSubscription?.unsubscribe();
  }
}
