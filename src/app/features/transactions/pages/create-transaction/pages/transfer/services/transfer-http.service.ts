import { Injectable } from "@angular/core";
import { environment } from "../../../../../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TransferPostDto } from "../dto/transfer-post.dto";
import { TransferPostResponseDto } from "../dto/transfer-post-response.dto";

@Injectable({providedIn: "root"})
export class TransferHttpService {
  private ENV = environment;
  private baseUrl: string = `${this.ENV.apiBaseUrl}/transfers`;

  constructor(private http: HttpClient){}

  createTransferHttp(data: TransferPostDto): Observable<TransferPostResponseDto>{
    return this.http.post<TransferPostResponseDto>(this.baseUrl, data, { withCredentials: true });
  }
}
