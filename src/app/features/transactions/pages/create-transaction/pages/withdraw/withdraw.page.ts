import { Component } from "@angular/core";
import { Info } from "lucide-angular";

@Component({
  selector: "app-withdraw",
  templateUrl: "./withdraw.page.html",
  styleUrls: ["./withdraw.page.scss"],
  standalone: false
})
export class WithdrawPage {
    info = Info;
}
