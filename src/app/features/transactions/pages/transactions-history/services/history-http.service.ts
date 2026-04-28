import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../../environments/environment";
import { Observable } from "rxjs";

@Injectable({providedIn: "root"})
export class HistoryHttpService {
  private ENV = environment;
  private baseUrl = `${this.ENV.apiBaseUrl}/transactions`;

  constructor(private http: HttpClient){}

  getTransactionsHttp():Observable<any>{
    return this.http.get<any>(this.baseUrl, {withCredentials: true});
  }
}
