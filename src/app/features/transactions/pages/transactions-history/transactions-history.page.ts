import { Component, OnDestroy, OnInit, signal } from "@angular/core";
import { HistoryService } from "./services/history.service";
import { Subscription } from "rxjs";
import { TransactionDto } from "./dto/transaction.dto";

@Component({
  selector: "app-transactions-history",
  templateUrl: "./transactions-history.page.html",
  styleUrls: ["./transactions-history.page.scss"],
  standalone: false
})
export class TransactionsHistoryPage implements OnInit, OnDestroy {
  transactions = signal<TransactionDto[]>([]);
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
