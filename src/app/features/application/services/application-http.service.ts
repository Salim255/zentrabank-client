import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApplicationResponseDto, ApplicationReviewDto } from "../model/application.model";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment.prod";

@Injectable({providedIn: "root"})
export class ApplicationHttpService {
  private ENV = environment;
  private apiBaseUrl:string = `${this.ENV.apiBaseUrl}/applications`;
  constructor(private http: HttpClient) {}

  createApplication(payload: ApplicationReviewDto): Observable<ApplicationResponseDto> {
    return this.http.post<ApplicationResponseDto>(`${this.apiBaseUrl}`, payload, { withCredentials: true });
  }
}
