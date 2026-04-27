import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"],
  standalone: false
})
export class HeroComponent {

  constructor(
    private router: Router
  ){}

  onHero(){

  }
}
