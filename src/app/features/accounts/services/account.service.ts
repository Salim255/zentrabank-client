import { Injectable } from "@angular/core";
import { AccountHttpService } from "./account-http.service";
import { BehaviorSubject, Observable } from "rxjs";
import { Account } from "../model/account.model";

@Injectable({providedIn: "root"})
export class AccountService {
  private accountsSubject = new BehaviorSubject<Account [] >([])


  constructor(private accountHttpService: AccountHttpService){}

  setAccounts(accounts: Account[]): void{
    this.accountsSubject.next(accounts);
  }

  getUserAccounts(): Observable<any>{
    return this.accountHttpService.fetchAccounts()
  }
}
