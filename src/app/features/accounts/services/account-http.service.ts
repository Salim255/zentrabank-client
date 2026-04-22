import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AccountsResponseDto } from "../model/account.model";

@Injectable({providedIn: "root"})
export class AccountHttpService {

  private ENV = environment;
  private basUrl: string = `${this.ENV.apiBaseUrl}/users/accounts`;

  constructor(private http: HttpClient){}

  fetchAccounts(): Observable<AccountsResponseDto>{
    return this.http.get<AccountsResponseDto>(`${this.basUrl}`, { withCredentials: true })
  }
}
