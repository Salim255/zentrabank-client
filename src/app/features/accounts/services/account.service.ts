import { Injectable } from "@angular/core";
import { AccountHttpService } from "./account-http.service";
import { Observable } from "rxjs";

@Injectable({providedIn: "root"})
export class AccountService {
  constructor(private accountHttpService: AccountHttpService){}

  getUserAccounts(): Observable<any>{
    return this.accountHttpService.fetchAccounts()
  }
}
