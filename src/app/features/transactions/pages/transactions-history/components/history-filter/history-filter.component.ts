import { Component } from "@angular/core";
import { SelectOption } from "../../../../../../shared/kits/app-select/app-select.component";
import { ArrowRightLeft, Banknote, ListFilter } from "lucide-angular";

@Component({
  selector: "app-history-filter",
  templateUrl: "./history-filter.component.html",
  styleUrl: "./history-filter.component.scss",
  standalone: false
})
export class HistoryFilterComponent {
  typeOptions: SelectOption[] = [
  { label: 'All Types', value: 'all', icon: ListFilter },
  { label: 'Transfers', value: 'TRANSFER', icon: ArrowRightLeft },
  { label: 'Deposits', value: 'DEPOSIT', icon: Banknote },
  { label: 'Withdrawals', value: 'WITHDRAW', icon: Banknote }
];

}
