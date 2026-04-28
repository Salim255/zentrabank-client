import { Component, OnDestroy, OnInit, signal } from "@angular/core";
import { HistoryService } from "./services/history.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-transactions-history",
  templateUrl: "./transactions-history.page.html",
  styleUrls: ["./transactions-history.page.scss"],
  standalone: false
})
export class TransactionsHistoryPage implements OnInit, OnDestroy {
  transactions = signal<any>(null);
  private transactionsSubscription!: Subscription;

  constructor(private historyService: HistoryService){}

  ngOnInit(): void {

  }


  subscribeToTransactions(){
    this.transactionsSubscription = this.historyService.getTransactions$.subscribe(
      trans => this.transactions.set(trans)
    )
  }

  ngOnDestroy(): void {
    this.transactionsSubscription?.unsubscribe();
  }
}
