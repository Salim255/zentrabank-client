import { Component, signal } from "@angular/core";
import { Subscription } from "rxjs";
import { AccountDto } from "../../../accounts/model/account.model";
import { AccountItemService } from "../account-item.service";
import { Wallet } from "lucide-angular";

@Component({
  selector: "app-manage-page",
  templateUrl: "./manage.page.html",
  styleUrls: ["./manage.page.scss"],
  standalone: false
})
export class ManagePage {
    private accountItemSubscription!: Subscription;

    account = signal<AccountDto| null>(null);
    Wallet = Wallet;
    constructor(private accountItemService: AccountItemService){}

    ngOnInit(): void {
      this.subscribeToAccountItem();
    }

    subscribeToAccountItem(){
      this.accountItemSubscription = this.accountItemService.getAccountItem$.subscribe(account => {
        this.account.set(account);
      })
    }

    ngOnDestroy(): void {
      this.accountItemSubscription?.unsubscribe();
    }
}
