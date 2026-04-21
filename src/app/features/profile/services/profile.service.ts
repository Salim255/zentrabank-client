import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Profile } from "../model/profile.model";

@Injectable({providedIn: "root"})
export class ProfileService {
  private profileSubject = new BehaviorSubject<Profile | null>(null);
  profileSubject$ = this.profileSubject.asObservable();

  constructor(){}

  setProfile(profile: Profile | null){
    this.profileSubject.next(profile);
  }
}
