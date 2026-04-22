import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable, switchMap, tap, throwError } from "rxjs";
import { AuthHttpService } from "./auth-http.service";
import { LoginDto } from "../dto/login-dto";
import { User } from "../models/user.model";
import { RegisterDto } from "../dto/registerDto";
import { ProfileService } from "../../profile/services/profile.service";
import { ProfileResponseDto } from "../../profile/model/profile.model";
import { LoginResponseDto } from "../dto/login-response-dto";

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

  login(credentials: LoginDto):Observable<ProfileResponseDto> {
    return this.authHttp.login(credentials).pipe(
      switchMap((response) => {
        // store user basic info (id, email, role)
        const user = response.data.user;
        return this.profileService.fetchProfile().pipe(
          tap(() => {
            // now update both states together
            this.setUser(user);
          })
        );
      })
    );
  }

  private setUser(user: User | null) {
    this.user.next(user);
  }

  signup(details: RegisterDto):Observable<LoginResponseDto> {
    return this.authHttp.signup(details).pipe(
      tap((response: LoginResponseDto)=> {
        const user = response.data.user;
        this.user.next(user);
      })
    );
  }

  get userIsAuthenticated(): Observable<boolean> {
    return this.user$.pipe(
      map(user => !!user)
    );
  }
}
