import { Component } from "@angular/core";
import { Info } from "lucide-angular";

@Component({
  selector: "app-deposit",
  templateUrl: "./deposit.page.html",
  styleUrls: ["./deposit.page.scss"],
  standalone: false
})
export class DepositPage {
  info = Info;
}
