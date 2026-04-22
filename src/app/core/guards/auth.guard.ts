import { CanActivate, Router, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";
import { AuthService } from "../../features/auth/services/auth.service";
import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ){}

  canActivate(): Observable<boolean | UrlTree> {
    return this.authService.userIsAuthenticated.pipe(
      map((auth) => {
        if(auth) {
          return true;
        };
        const url: UrlTree = this.router.createUrlTree(["/auth/login"]);
        return url;
      })
    )
  }
}
