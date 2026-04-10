import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sub-header",
  templateUrl: "./sub-header.component.html",
  styleUrls: ["./sub-header.component.scss"],
  standalone: false
})
export class SubHeaderComponent {
  constructor(private router: Router) { }

  onNav(){
    this.router.navigate(["/accounts"])
  }
}
