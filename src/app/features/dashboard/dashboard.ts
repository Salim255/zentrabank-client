import { Component, signal } from "@angular/core";
import { HeroService } from "./service/hero.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.html",
  styleUrls: ["./dashboard.scss"],
  standalone: false
})

export class Dashboard {
  constructor(
    private router: Router,
    private heroService: HeroService
  ){}

  get isProfilePage(): boolean {
    return this.router.url === '/dashboard/profile';
  }

  triggerHeroModal() {
    this.heroService.setHerModal(true);
  }

  onHero(){
    this.heroService.setHerModal(true);
  }
}
