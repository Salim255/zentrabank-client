import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { HistoryHttpService } from "./history-http.service";
import { GetTransactionsResponseDto, TransactionDto, TransactionsSummaryDto } from "../dto/transaction.dto";


@Injectable({providedIn: "root"})
export class HistoryService {

  private transactionsHistorySubject = new BehaviorSubject<TransactionDto[]>([]);
  private transactionsSummarySubject = new BehaviorSubject<TransactionsSummaryDto | null>(null);

  constructor(private historyHttpService: HistoryHttpService){}


  get getTransactions$(): Observable<TransactionDto[]>{
    return this.transactionsHistorySubject.asObservable();
  }

  get getTransactionsSummary$(): Observable<TransactionsSummaryDto | null>{
    return this.transactionsSummarySubject.asObservable();
  }

  setTransactionsSummary(summary: TransactionsSummaryDto | null){
    this.transactionsSummarySubject.next(summary);
  }

  setTransactions(transactions: TransactionDto[]): void{
    this.transactionsHistorySubject.next(transactions);
  }

  getTransactionsHttp(): Observable<GetTransactionsResponseDto>{
    return this.historyHttpService.getTransactionsHttp().pipe(
      tap((response) => {
          const transactionsDto:TransactionDto[] = response.data.transactions;
          const summary: TransactionsSummaryDto = response.data.summary;
          this.setTransactionsSummary(summary);
          this.setTransactions(transactionsDto);
      })
    );
  }
}
