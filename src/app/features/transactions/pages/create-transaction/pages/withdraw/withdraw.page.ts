import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Info } from "lucide-angular";

@Component({
  selector: "app-withdraw",
  templateUrl: "./withdraw.page.html",
  styleUrls: ["./withdraw.page.scss"],
  standalone: false
})
export class WithdrawPage {
    info = Info;

  constructor(private router: Router){}

  onBack(){
    this.router.navigateByUrl("/transactions/transfer")
  }
}
