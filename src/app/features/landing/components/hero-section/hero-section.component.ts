import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "landing-hero-section",
  templateUrl: "./hero-section.component.html",
  styleUrls: ["./hero-section.component.scss"],
  standalone: false
})
export class HeroSectionComponent {

  constructor(private router: Router){}

  onGetStart(){
      this.router.navigateByUrl("/auth/signup")
  }
}
