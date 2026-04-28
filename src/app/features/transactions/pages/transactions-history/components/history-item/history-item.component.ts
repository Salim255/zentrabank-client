import { Component, input } from "@angular/core";
import { TransactionDto } from "../../dto/transaction.dto";

@Component({
  selector: "app-history-item",
  templateUrl: "./history-item.component.html",
  styleUrl: "./history-item.component.scss",
  standalone: false,
})
export class HistoryItemComponent {
  transaction = input<TransactionDto>();
}
