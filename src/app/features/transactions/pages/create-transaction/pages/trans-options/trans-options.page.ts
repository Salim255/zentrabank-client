import { Component } from "@angular/core";
import { ArrowRight, ArrowRightLeft, Banknote } from "lucide-angular";

@Component({
  selector: "app-trans-options",
  templateUrl: "./trans-options.page.html",
  styleUrls: ["./trans-options.page.scss"],
  standalone: false
})
export class TransOptionsPage {
  banknote = Banknote;
  arrowRight = ArrowRight;
  arrowRightLeft = ArrowRightLeft;
}
