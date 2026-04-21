import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, tap } from "rxjs";
import { AuthService } from "../../features/auth/services/auth.service";

export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.authService.userIsAuthenticated.pipe(
      tap(response => {
        if (response) return response;
        const url: UrlTree = this.router.createUrlTree(["/auth/login"]);
        return url;
      })
    )
  }
}
