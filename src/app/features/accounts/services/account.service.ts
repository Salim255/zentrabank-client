import { Injectable } from "@angular/core";
import { AccountHttpService } from "./account-http.service";
import { BehaviorSubject, map, Observable, tap } from "rxjs";
import { Account, AccountAdapter, AccountsResponseDto } from "../model/account.model";

@Injectable({providedIn: "root"})
export class AccountService {
  private accountsSubject = new BehaviorSubject<Account [] >([])


  constructor(
    private accountHttpService: AccountHttpService,
  ){}

  setAccounts(accounts: Account[]): void{
    this.accountsSubject.next(accounts);
  }

  getUserAccounts(): Observable<Account[]>{
    return this.accountHttpService.fetchAccounts().pipe(
      map((res: AccountsResponseDto) => {
        const accountsDto = res.data.accounts;
        return accountsDto.map((dto) => AccountAdapter.fromDto(dto))
      }),
      tap((accounts: Account []) => this.setAccounts(accounts))
    )
  }

  get getAccounts(): Observable<Account[]> {
    return this.accountsSubject.asObservable();
  }
}
