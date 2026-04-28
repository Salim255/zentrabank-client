import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HistoryHttpService } from "./history-http.service";

@Injectable({providedIn: "root"})
export class HistoryService {

  private transactionsHistorySubject = new BehaviorSubject<any>(null);

  constructor(private historyHttpService: HistoryHttpService){}


  get getTransactions$(): Observable<any>{
    return this.transactionsHistorySubject.asObservable();
  }

  setTransactions(transactions: any): void{
    this.transactionsHistorySubject.next(transactions);
  }

  getTransactionsHttp(): Observable<any>{
    return this.historyHttpService.getTransactionsHttp();
  }
}
