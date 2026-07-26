import { Component, input } from "@angular/core";
import { TransactionDto, TransferType, TransferStatus } from "../../dto/transaction.dto";
import { ArrowLeft, ArrowRight, Banknote, List, LucideIconData } from "lucide-angular";



@Component({
  selector: "app-history-item",
  templateUrl: "./history-item.component.html",
  styleUrl: "./history-item.component.scss",
  standalone: false,
})
export class HistoryItemComponent {
  transaction = input<TransactionDto>();
  transferStatus  = TransferStatus ;
  private typeLabels: Record<string, string> = {
    TRANSFER_CREDIT: "Credit",
    TRANSFER_DEBIT: "Debit",
    WITHDRAWAL: "Withdrawal"
  };

  transformTransferText() {
    return this.typeLabels[this.transaction()?.type ?? ""] || "Deposit";
  }

  getTypeIcon(type: TransferType): LucideIconData{
    switch (type) {
      case TransferType.DEPOSIT: return Banknote;
      case TransferType.WITHDRAWAL: return Banknote;
      case TransferType.TRANSFER_DEBIT: return ArrowRight;
      case TransferType.TRANSFER_CREDIT: return ArrowLeft;
      default: return List;
    }
  }

  getTypeLabel(type: TransferType): string {
    switch (type) {
      case TransferType.DEPOSIT: return 'Deposit';
      case TransferType.WITHDRAWAL: return 'Withdrawal';
      case TransferType.TRANSFER_DEBIT: return 'Transfer Sent';
      case TransferType.TRANSFER_CREDIT: return 'Transfer Received';
      default: return 'Unknown';
    }
  }

  isNegative(type: TransferType): boolean {
    return type === TransferType.WITHDRAWAL || type === TransferType.TRANSFER_DEBIT;
  }

  isPositive(type: TransferType): boolean {
    return type === TransferType.DEPOSIT || type === TransferType.TRANSFER_CREDIT;
  }

}
