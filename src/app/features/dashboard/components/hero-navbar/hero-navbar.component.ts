import { Component, signal } from "@angular/core";
import { HeroService } from "../../service/hero.service";
import { Subscription } from "rxjs";
import { AuthService } from "../../../auth/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-hero-navbar",
  templateUrl: "./hero-navbar.component.html",
  styleUrls: ["./hero-navbar.component.scss"],
  standalone: false
})
export class HeroNavbarComponent {
  subscribeToHeroModal!: Subscription;
  isOpen= signal<boolean>(false);

  constructor(
    private router: Router,
    private authService: AuthService,
    private heroService: HeroService,
  ){}

  ngOnInit(): void {
    this. subscribeToToHeroModal();
  }

  subscribeToToHeroModal(){
    this.subscribeToHeroModal = this.heroService
      .heroModalSubject$
      .subscribe((status) => {
        this.isOpen.set(status)
    })
  }

  goToProfile(){
    this.heroService.setHerModal(false);
  }

  logout(){
    this.authService.logout().subscribe();

    this.heroService.setHerModal(false);
  }

  ngOnDestroy(): void {
    this.subscribeToHeroModal?.unsubscribe();
  }
}
