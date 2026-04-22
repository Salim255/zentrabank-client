import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ProfileService } from "../profile/services/profile.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-application",
  templateUrl: "./application.page.html",
  styleUrls: ["./application.page.scss"],
  standalone: false,
})
export class ApplicationPage {
  profileSubscription!: Subscription;

  constructor(
    private profileService: ProfileService,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.subscribeToProfile();
  }

  subscribeToProfile(){
    this.profileSubscription = this.profileService.profileSubject$.subscribe(profile => {
      if(profile) {
        this.router.navigate(["/dashboard/accounts"])
      }
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.profileSubscription?.unsubscribe();
  }
}
