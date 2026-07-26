import { Component, Input } from "@angular/core";
import { ArrowDownLeft, ArrowRightLeft, ArrowUpRight, Receipt, ShoppingBag, Wallet } from "lucide-angular";

@Component({
    selector: "app-transaction-summary",
    templateUrl: "./transaction-summary.component.html",
    styleUrls: ["./transaction-summary.component.scss"],
    standalone: false
})
export class TransactionSummaryComponent {
  @Input() summary!: any;
  wallet = Wallet;
  receipt = Receipt;
  shoppingBag = ShoppingBag;
  arrowDownLeft = ArrowDownLeft;
  arrowUpRight = ArrowUpRight;
  arrowRightLeft = ArrowRightLeft;
}
