import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";
import { inject } from "@angular/core";
import { ProfileService } from "../../features/profile/services/profile.service";

export const applicationGard: CanActivateFn = (
  route: ActivatedRouteSnapshot, // Contains information about the route being activated
  state: RouterStateSnapshot // Contains the router's current state
)=> {
  const profileService = inject(ProfileService);
  return profileService.hasProfile();
}
