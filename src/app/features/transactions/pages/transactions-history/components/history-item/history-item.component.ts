import { Component, input } from "@angular/core";
import { TransactionDto, TransferType } from "../../dto/transaction.dto";



@Component({
  selector: "app-history-item",
  templateUrl: "./history-item.component.html",
  styleUrl: "./history-item.component.scss",
  standalone: false,
})
export class HistoryItemComponent {
  transaction = input<TransactionDto>();
  private typeLabels: Record<string, string> = {
    TRANSFER_CREDIT: "Credit",
    TRANSFER_DEBIT: "Debit",
    WITHDRAWAL: "Withdrawal"
  };

 transformTransferText() {
  return this.typeLabels[this.transaction()?.type ?? ""] || "Deposit";
}
}
