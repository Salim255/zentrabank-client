import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Banknote, ChartBarIcon, UserIcon, WalletIcon } from "lucide-angular";

@Component({
  selector: "app-global-nav",
  templateUrl: "./global-navigation.component.html",
  styleUrls: ["./global-navigation.component.scss"],
  standalone: false
})
export class GlobalNavigationComponent {
  constructor(private router: Router) { }
  walletIcon = WalletIcon;
  transactionIcon = Banknote;
  chartIcon = ChartBarIcon;
  userIcon = UserIcon;
  onNav(){
    this.router.navigate(["/accounts"])
  }
}
