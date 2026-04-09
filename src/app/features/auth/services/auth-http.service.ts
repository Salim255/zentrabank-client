import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginDto } from "../dto/login-dto";
import { environment } from "../../../../environments/environments.prod";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {
  private ENV = environment;
  private apiBaseUrl:string = `${this.ENV.apiBaseUrl}/auth`;
  constructor(private http: HttpClient) { }

  login(credentials: LoginDto):Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/login`, credentials);
  }

  signup(details: { loginId: string; password: string }):Observable<any> {
    // Implement actual HTTP request to backend for signup
    console.log('Signing up with details:', details);
    return new Observable();
  }
}
