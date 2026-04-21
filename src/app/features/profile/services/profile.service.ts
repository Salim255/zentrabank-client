import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { Profile } from "../model/profile.model";
import { ProfileHttpService } from "./profile-http.service";

@Injectable({providedIn: "root"})
export class ProfileService {
  private profileSubject = new BehaviorSubject<Profile | null>(null);
  profileSubject$ = this.profileSubject.asObservable();

  constructor(private profileHttpService: ProfileHttpService){}

  fetchProfile():Observable<any>{
    return this.profileHttpService.fetchProfile().pipe(
      map((response) => {

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
