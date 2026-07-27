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
  showFeatureNav = signal<boolean>(false);
  showGlobalNav = signal<boolean>(false);
  headerVariant = signal<HeaderVariant>("dark");
  currentAuthMode = signal<"login" | "signup" | null>(null);
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
          action: () => this.onCreateAccount()
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
    // Hide feature nav on auth or landing
    const isAuth = url.startsWith("/auth");
    const isLanding = url.startsWith("/landing");
    const isApplication = url.startsWith("/application");
    const isTransactions = url.startsWith("/transactions");
    const isAccount = url.startsWith("/accounts/account");


     const authMode =
        url.startsWith("/auth/login")
            ? "login"
            : url.startsWith("/auth/signup")
                ? "signup"
                : null;


    this.currentAuthMode.set(authMode);

    this.showGlobalNav.set(!isAuth && !isLanding && !isApplication);

    this.showFeatureNav.set(isTransactions || isAccount);

    this.headerVariant.set(
      url.startsWith("/landing")
          ? "light"
          : "dark"
    );

  }

  private onLogin() {
    this.router.navigateByUrl("/auth");
  }
  private onCreateAccount(){
    console.log("Hello")
    this.router.navigateByUrl("/auth/signup");
  }
}
