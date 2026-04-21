import { CanActivate, Router, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";
import { ProfileService } from "../../features/profile/services/profile.service";
import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class DashboardGuard implements CanActivate {
  constructor(
    private router: Router,
    private profileService: ProfileService,
  ){}

  canActivate(): Observable<boolean | UrlTree> {
    return this.profileService.profileSubject$.pipe(
      map((response) => {
        if(response) return true;
        const url: UrlTree = this.router.createUrlTree(["/auth/login"]);
        return url;
      })
    )
  }
}
