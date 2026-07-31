import { Component, signal } from "@angular/core";
import { ArrowDownLeft, ArrowRightLeft, ArrowUpRight, Car, Music4, ShoppingBag } from "lucide-angular";
import { TransactionDto } from "../../../transactions/pages/transactions-history/dto/transaction.dto";
import { Subscription } from "rxjs";
import { HistoryService } from "../../../transactions/pages/transactions-history/services/history.service";

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


  transactions = signal<TransactionDto[]>([])
  transaction = signal<TransactionDto[]>([]);
  private transactionsSubscription!: Subscription;

  constructor(private historyService: HistoryService){}
  ngOnInit(): void {
    this.historyService.getTransactionsHttp().subscribe();
    this.subscribeToTransactions();
  }


  subscribeToTransactions(){
    this.transactionsSubscription = this.historyService.getTransactions$.
    subscribe( trans => {
        this.transactions.set(trans)
      }
    )
  }

  ngOnDestroy(): void {
    this.transactionsSubscription?.unsubscribe();
  }

}
