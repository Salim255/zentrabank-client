import { Component, OnInit, signal } from "@angular/core";
import { HeaderAction, HeaderVariant } from "../../shared/components/header/header.component";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
  standalone: false
})
export class LayoutComponent implements OnInit {
  headerVariant = signal<HeaderVariant>("dark");
  headerActions: HeaderAction[] = [

      {
          label: "Sign in",
          variant: "ghost",
          type: "button",
          action: () => this.onLogin()
      },


      {
          label: "Open account",
          variant: "primary",
          type: "button",
          action: () => this.onLogin()
      }

  ];

  constructor(private router: Router){

  }

  ngOnInit(): void {
    // For refresh
    this.updateHeaderVariant(this.router.url);
    this.router.events
      .pipe(
          filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        const url = this.router.url;
        this.updateHeaderVariant(url);
      });
  }

  private updateHeaderVariant(url: string): void {

    this.headerVariant.set(
      url.startsWith("/landing")
          ? "light"
          : "dark"
    );

  }

  onLogin() {
    this.router.navigateByUrl("/auth");
  }
}
