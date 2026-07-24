import { Component } from "@angular/core";
import { HeaderAction } from "../../shared/components/header/header.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-lading",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
  standalone: false
})

export class LandingComponent {

  constructor(private router: Router){}
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

    onLogin() {
      this.router.navigateByUrl("/auth");
    }
}
