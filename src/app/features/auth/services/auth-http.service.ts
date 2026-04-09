import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginDto } from "../dto/LoginDto";

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {
  constructor() { }

  login(credentials: LoginDto):Observable<any> {
    // Implement actual HTTP request to backend for login
    console.log('Logging in with credentials:', credentials);
    return new Observable();
  }

  signup(details: { loginId: string; password: string }):Observable<any> {
    // Implement actual HTTP request to backend for signup
    console.log('Signing up with details:', details);
    return new Observable();
  }
}
