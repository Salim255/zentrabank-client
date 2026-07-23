import { Component } from "@angular/core";
import {
  ArrowUpRight,
  CreditCard,
  ChartColumn,
  PlusCircle
} from 'lucide-angular';

@Component({
  selector: "landing-quick-actions",
  templateUrl: "./quick-actions.component.html",
  styleUrls: ["./quick-actions.component.scss"],
  standalone: false
})


export class QuickActionsComponent {
    readonly actions = [

        {
            icon: ArrowUpRight,
            label: 'Transfer'
        },

        {
            icon: CreditCard,
            label: 'Cards'
        },

        {
            icon: ChartColumn,
            label: 'Analytics'
        },

        {
            icon: PlusCircle,
            label: 'Add money'
        }

    ];
}
