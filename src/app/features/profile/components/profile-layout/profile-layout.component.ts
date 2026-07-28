import { Component, OnDestroy, OnInit, signal } from "@angular/core";
import { ProfileService } from "../../services/profile.service";
import { Subscription } from "rxjs";
import { BriefcaseIcon, MapPinIcon, UserIcon } from "lucide-angular";

@Component({
  selector: "app-profile-layout",
  templateUrl: "./profile-layout.component.html",
  styleUrl: "./profile-layout.component.scss",
  standalone: false
})
export class ProfileLayoutComponent implements OnInit, OnDestroy {
   private profileSubscription!: Subscription;

  constructor(private profileService: ProfileService){}
  // fetchProfile
  profile = signal<any>(null);


  briefcaseIcon = BriefcaseIcon;
  mapPinIcon = MapPinIcon;
  userIcon = UserIcon;
  ngOnInit(): void {
    this.subscribeToProfile();
  }


  private subscribeToProfile(){
     this.profileSubscription = this.profileService.fetchProfile().subscribe(profile => {
      console.log(profile)
      this.profile.set(profile.data.profile);
     })
  }


  ngOnDestroy(): void {
    this.profileSubscription?.unsubscribe();
  }
}
