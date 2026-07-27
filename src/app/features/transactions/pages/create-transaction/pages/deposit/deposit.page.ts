import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Info } from "lucide-angular";

@Component({
  selector: "app-deposit",
  templateUrl: "./deposit.page.html",
  styleUrls: ["./deposit.page.scss"],
  standalone: false
})
export class DepositPage {
  info = Info;


  constructor(private router: Router){}


  onBack(){
    this.router.navigateByUrl("/transactions/transfer")
  }
}
