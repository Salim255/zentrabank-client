import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-lading",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
  standalone: false
})

export class LandingComponent {

  constructor(private router: Router){}
}
