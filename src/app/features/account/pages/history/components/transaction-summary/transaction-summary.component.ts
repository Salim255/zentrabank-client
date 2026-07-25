import { Component } from "@angular/core";
import { ArrowDownLeft, ArrowRightLeft, ArrowUpRight, ShoppingBag } from "lucide-angular";

@Component({
    selector: "app-transaction-summary",
    templateUrl: "./transaction-summary.component.html",
    styleUrls: ["./transaction-summary.component.scss"],
    standalone: false
})
export class TransactionSummaryComponent {
  shoppingBag = ShoppingBag;
  arrowDownLeft = ArrowDownLeft;
  arrowUpRight = ArrowUpRight;
  arrowRightLeft = ArrowRightLeft;
}
