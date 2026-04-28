import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { HistoryHttpService } from "./history-http.service";
import { GetTransactionsResponseDto, TransactionDto } from "../dto/transaction.dto";

@Injectable({providedIn: "root"})
export class HistoryService {

  private transactionsHistorySubject = new BehaviorSubject<TransactionDto[]>([]);

  constructor(private historyHttpService: HistoryHttpService){}


  get getTransactions$(): Observable<TransactionDto[]>{
    return this.transactionsHistorySubject.asObservable();
  }

  setTransactions(transactions: TransactionDto[]): void{
    this.transactionsHistorySubject.next(transactions);
  }

  getTransactionsHttp(): Observable<GetTransactionsResponseDto>{
    return this.historyHttpService.getTransactionsHttp().pipe(
      tap((response) => {
          const transactionsDto:TransactionDto[] = response.data.transactions;
          this.setTransactions(transactionsDto);
      })
    );
  }
}
