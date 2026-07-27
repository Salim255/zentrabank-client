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
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.featureNavService.setItems(this.transactionsNav);
  }
}
