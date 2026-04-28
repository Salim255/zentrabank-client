import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../../environments/environment";
import { Observable } from "rxjs";
import { GetTransactionsResponseDto } from "../dto/transaction.dto";

@Injectable({providedIn: "root"})
export class HistoryHttpService {
  private ENV = environment;
  private baseUrl = `${this.ENV.apiBaseUrl}/transactions`;

  constructor(private http: HttpClient){}

  getTransactionsHttp():Observable<GetTransactionsResponseDto>{
    return this.http.get<GetTransactionsResponseDto>(this.baseUrl, {withCredentials: true});
  }
}
