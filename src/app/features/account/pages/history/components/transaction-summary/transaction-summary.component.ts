import { Component, Input, OnInit, signal } from "@angular/core";
import { ArrowDownLeft, ArrowRightLeft, ArrowUpRight, Receipt, ShoppingBag, Wallet } from "lucide-angular";
import { HistoryService } from "../../../../../transactions/pages/transactions-history/services/history.service";
import { Subscription } from "rxjs";
import { TransactionsSummaryDto } from "../../../../../transactions/pages/transactions-history/dto/transaction.dto";

@Component({
    selector: "app-transaction-summary",
    templateUrl: "./transaction-summary.component.html",
    styleUrls: ["./transaction-summary.component.scss"],
    standalone: false
})
export class TransactionSummaryComponent implements OnInit {
  wallet = Wallet;
  receipt = Receipt;
  shoppingBag = ShoppingBag;
  arrowDownLeft = ArrowDownLeft;
  arrowUpRight = ArrowUpRight;
  arrowRightLeft = ArrowRightLeft;

  summary = signal< TransactionsSummaryDto  | null>(null)
  private summarySubscription!: Subscription;

  constructor(private historyService: HistoryService){}

  ngOnInit(): void {
      this.subscribeToSummary();
  }


  private subscribeToSummary(){
    this.summarySubscription = this.historyService.getTransactionsSummary$.subscribe(data => {
        this.summary.set(data);
    })
  }


  ngOnDestroy(): void {
    this.summarySubscription?.unsubscribe();
  }
}
