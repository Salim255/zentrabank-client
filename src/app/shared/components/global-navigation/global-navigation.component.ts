import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-global-nav",
  templateUrl: "./global-navigation.component.html",
  styleUrls: ["./global-navigation.component.scss"],
  standalone: false
})
export class GlobalNavigationComponent {
  constructor(private router: Router) { }

  onNav(){
    this.router.navigate(["/accounts"])
  }
}
