import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { AuthHttpService } from "./auth-http.service";
import { LoginDto } from "../dto/login-dto";
import { LoginResponseDto } from "../dto/login-response-dto";
import { User } from "../models/user.model";
import { RegisterDto } from "../dto/registerDto";
import { ProfileService } from "../../profile/services/profile.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user = new BehaviorSubject<User | null>(null);
  user$ = this.user.asObservable();

  constructor(
    private profileService: ProfileService,
    private authHttp: AuthHttpService,
  ) { }

  login(credentials: LoginDto):Observable<LoginResponseDto> {
    return this.authHttp.login(credentials).pipe(
      map(response => {
        this.setUser(response.data.user);
        this.profileService.fetchProfile().subscribe();
        return response;
      })
    );
  }

  private setUser(user: User | null) {
    this.user.next(user);
  }

  signup(details: RegisterDto):Observable<any> {
    return this.authHttp.signup(details);
  }

  get userIsAuthenticated(): Observable<boolean> {
    return this.user$.pipe(
      map(user => !!user)
    );
  }
}
