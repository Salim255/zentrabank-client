import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, tap } from "rxjs";
import { Profile, ProfileResponseDto } from "../model/profile.model";
import { ProfileHttpService } from "./profile-http.service";

@Injectable({providedIn: "root"})
export class ProfileService {
  private profileSubject = new BehaviorSubject<Profile | null>(null);
  profileSubject$ = this.profileSubject.asObservable();

  constructor(private profileHttpService: ProfileHttpService){}

  fetchProfile():Observable<ProfileResponseDto>{
    return this.profileHttpService.fetchUserProfile().pipe(
      tap((response) => {
        const profileDto = response.data.profile;
        this.setProfile(profileDto);
      })
    );
  }

  setProfile(profile: Profile | null){
    this.profileSubject.next(profile);
  }

  hasProfile(): boolean{
    return !!this.profileSubject.value;
  }
}
