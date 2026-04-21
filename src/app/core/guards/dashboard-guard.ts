import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";
import { ProfileService } from "../../features/profile/services/profile.service";

export class DashboardGuard implements CanActivate {
  constructor(
    private router: Router,
    private profileService: ProfileService,
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> {
    return this.profileService.profileSubject$.pipe(
      map((response) => {
        if(response) return true;
        const url: UrlTree = this.router.createUrlTree(["/auth/login"]);
        return url;
      })
    )
  }
}
