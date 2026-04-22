import { Component } from "@angular/core";
import { HeroService } from "./service/hero.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.html",
  styleUrls: ["./dashboard.scss"],
  standalone: false
})

export class Dashboard {
  constructor(private heroService: HeroService){}

  triggerHeroModal() {
    this.heroService.setHerModal(true);
  }

  onHero(){
    this.heroService.setHerModal(true);
  }
}
