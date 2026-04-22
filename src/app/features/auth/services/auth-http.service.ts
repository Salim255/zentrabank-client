import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginDto } from "../dto/login-dto";
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { LoginResponseDto } from "../dto/login-response-dto";
import { RegisterDto } from "../dto/registerDto";
import { RegisterResponseDto } from "../dto/register-response-dto";

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {
  private ENV = environment;
  private apiBaseUrl:string = `${this.ENV.apiBaseUrl}/auth`;
  constructor(private http: HttpClient) { }

  login(credentials: LoginDto):Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(
      `${this.apiBaseUrl}/login`, credentials,
      { withCredentials: true }
    );
  }

  signup(payload: RegisterDto):Observable<RegisterResponseDto> {
    // Implement actual HTTP request to backend for signup
    return this.http.post<RegisterResponseDto>(
      `${this.apiBaseUrl}/register`,
      payload,
      { withCredentials: true }
    );
  }

  loadMe(){

  }
}
