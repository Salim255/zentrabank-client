import { Component } from "@angular/core";
import { HeaderAction } from "../../shared/components/header/header.component";

@Component({
  selector: "app-lading",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
  standalone: false
})

export class LandingComponent {
   headerActions: HeaderAction[] = [

        {
            label: "Sign in",
            variant: "ghost",
            type: "button"
        },


        {
            label: "Open account",
            variant: "primary",
            type: "button"
        }

    ];
}
