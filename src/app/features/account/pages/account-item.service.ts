import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AccountDto } from "../../accounts/model/account.model";

@Injectable({providedIn: "root"})
export class AccountItemService {
  private accountItemSubject = new BehaviorSubject<AccountDto | null>(null);
  getAccountItem$ = this.accountItemSubject.asObservable();

  setAccountItem(account: AccountDto | null){
    this.accountItemSubject.next(account);
  }
}
