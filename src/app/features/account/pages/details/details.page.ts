import { Component, OnDestroy, OnInit, signal } from "@angular/core";
import { Subscription } from "rxjs";
import { AccountItemService } from "../account-item.service";
import { AccountDto } from "../../../accounts/model/account.model";
import { Wallet } from "lucide-angular";

@Component({
  selector: "app-details",
  templateUrl: "./details.page.html",
  styleUrls: ["./details.page.scss"],
  standalone: false
})
export class DetailsPage implements OnInit , OnDestroy {
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
