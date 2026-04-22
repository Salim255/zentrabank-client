import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { ProfileResponseDto } from "../model/profile.model";

@Injectable({providedIn: "root"})
export class ProfileHttpService {
  private ENV = environment;
  private apiBaseUrl:string = `${this.ENV.apiBaseUrl}/users/profile`;
  constructor(private http: HttpClient){}

  fetchUserProfile(): Observable<ProfileResponseDto>{
    return this.http.get<ProfileResponseDto>(`${this.apiBaseUrl}`, {withCredentials: true});
  }
}
