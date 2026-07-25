import { Component } from "@angular/core";
import { ArrowDownLeft, ArrowRightLeft, ArrowUpRight, Car, Music4, ShoppingBag } from "lucide-angular";

@Component({
  selector: "app-history-page",
  templateUrl: "./history.page.html",
  styleUrls: ["./history.page.scss"],
  standalone: false
})
export class HistoryPage {
  shoppingBag = ShoppingBag;
  arrowDownLeft = ArrowDownLeft;
  arrowUpRight = ArrowUpRight;
  arrowRightLeft = ArrowRightLeft;
  car = Car;
  music4 = Music4;
}
