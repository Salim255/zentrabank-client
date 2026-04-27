import { Injectable } from "@angular/core";
import { environment } from "../../../../../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({providedIn: "root"})
export class TransferHttpService {
  private ENV = environment;
  private baseUrl: string = `${this.ENV.apiBaseUrl}/transfers`;

  constructor(private http: HttpClient){}
  createTransfer(): Observable<any>{
    return this.http.post<any>(this.baseUrl, {}, { withCredentials: true });
  }
}
