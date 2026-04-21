import { CanMatch, Router, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";
import { AuthService } from "../../features/auth/services/auth.service";

export class AuthRedirectGuard implements CanMatch {
  constructor(
    private router: Router,
    private authService: AuthService
  ){}

  canMatch(): Observable<boolean | UrlTree> {
    return this.authService.userIsAuthenticated.pipe(
      map((auth) => {
        if(!auth) {
          return true
        }
        const url: UrlTree = this.router.createUrlTree(['/dashboard']);
        return url;
      })
    )
  }
}
