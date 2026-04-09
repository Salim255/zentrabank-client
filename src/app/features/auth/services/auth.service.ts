import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthHttpService } from "./auth-http.service";
import { LoginDto } from "../dto/login-dto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private authHttp: AuthHttpService) { }

  login(credentials: LoginDto):Observable<any> {
    return this.authHttp.login(credentials);
  }

  signup(details: { loginId: string; password: string }):Observable<any> {
    return this.authHttp.signup(details);
  }
}
