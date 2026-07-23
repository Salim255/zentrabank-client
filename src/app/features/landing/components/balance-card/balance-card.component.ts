import { Component } from "@angular/core";

@Component({
  selector: "landing-balance-card",
  templateUrl: "./balance-card.component.html",
  styleUrls: ["./balance-card.component.scss"],
  standalone: false
})

export class BalanceCardComponent {
  readonly account = {

      type: 'Premium Checking',

      number: '•••• 2458',

      balance: '€24,860.52',

      change: '+3.8%',

      status: 'Available balance'

  };
}
