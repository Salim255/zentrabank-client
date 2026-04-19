import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-account-form",
  templateUrl: "./create-account-form.component.html",
  styleUrls: ["./create-account-form.component.scss"],
  standalone: false
})
export class CreateAccountFormComponent {
  constructor(private router: Router){}

  onContinue(){
    this.router.navigate(["/auth/signup/application/review"])
  }
}
