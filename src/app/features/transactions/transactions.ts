import { Component, OnInit } from "@angular/core";
import { FeatureNavItem, FeatureNavService } from "../../shared/services/feature-nav.service";

@Component({
  selector: "app-transactions",
  templateUrl: "./transactions.html",
  styleUrls: ["./transactions.scss"],
  standalone: false
})

export class Transactions implements OnInit {

  constructor(private featureNavService: FeatureNavService){}

  private transactionsNav: FeatureNavItem[] = [
    { label: 'Transfer', link: '/transactions/transfer', icon: 'ArrowRightLeft' },
    { label: 'History', link: '/transactions/history', icon: 'Clock' }
  ]

  ngOnInit(): void {
    this.featureNavService.setItems(this.transactionsNav);
  }
}
