import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-instructions",
  templateUrl: "./instructions.component.html",
  styleUrls: ["./instructions.component.scss"],
  standalone: false
})
export class InstructionsComponent {
  constructor(private router:Router){}
  onNavigate(){
    this.router.navigate(["/auth/login"]);
  }
}
