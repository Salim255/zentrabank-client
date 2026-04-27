import { Injectable } from "@angular/core";
import { environment } from "../../../../../../../../environments/environment";

@Injectable({providedIn: "root"})
export class TransferHttpService {
  private ENV = environment;
  private baseUrl: string = `${this.ENV.apiBaseUrl}/transfers`
}
