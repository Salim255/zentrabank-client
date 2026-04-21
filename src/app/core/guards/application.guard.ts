import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { inject, Injectable } from "@angular/core";
import { ProfileService } from "../../features/profile/services/profile.service";
import { map, Observable } from "rxjs";

@Injectable({providedIn: "root"})
export class ApplicationGuard implements CanActivate {
  constructor(
    private router: Router,
    private profileService: ProfileService,
  ){}

  canActivate(): Observable<boolean | UrlTree>{
    return this.profileService.profileSubject$.pipe(
      map((profile) => {
        if (!profile)  return true
        const url: UrlTree = this.router.createUrlTree(['/dashboard']);
        return url;
      })
    )
  }
}

