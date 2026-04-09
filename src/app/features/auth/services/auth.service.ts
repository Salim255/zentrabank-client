import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {
  constructor(private authHttp: AuthHttpService) { }

  login(credentials: { loginId: string; password: string }):Observable<any> {
    return this.authHttp.login(credentials);
  }

  signup(details: { loginId: string; password: string }):Observable<any> {
    return this.authHttp.signup(details);
  }
}
