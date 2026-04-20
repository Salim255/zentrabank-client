import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-application-form",
  templateUrl: "./application-form.component.html",
  styleUrls: ["./application-form.component.scss"],
  standalone: false
})
export class ApplicationFormComponent {

  constructor(private router: Router){}

  onContinue(){
    this.router.navigate(["/application/review"])
  }
}
