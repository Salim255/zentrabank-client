import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-review",
  templateUrl: "./review.component.html",
  styleUrls: ["./review.component.scss"],
  standalone: false
})
export class ReviewComponent {
  constructor(private router: Router){}

  onBack(){
    this.router.navigate(["/auth/signup/application"])
  }
}
