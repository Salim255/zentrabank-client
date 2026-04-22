import { Component } from "@angular/core";
import { AuthService } from "../../../auth/services/auth.service";

@Component({
  selector: "app-dashboard-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"],
  standalone: false
})
export class HeroComponent {

  constructor(private authservice: AuthService){}
  onHero(){

  }
}
