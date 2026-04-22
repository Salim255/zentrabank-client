import { CanMatch, Router, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";
import { AuthService } from "../../features/auth/services/auth.service";
import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class AuthRedirectGuard implements CanMatch {
  constructor(
    private router: Router,
    private authService: AuthService
  ){}

  canMatch(): Observable<boolean | UrlTree> {
    return this.authService.userIsAuthenticated.pipe(
      map((auth) => {
        if(!auth) {
          return true;
        }
        const url: UrlTree = this.router.parseUrl('/dashboard/accounts');
        return url;
      })
    )
  }
}
