import { Component, OnInit } from "@angular/core";
import { FeatureNavItem, FeatureNavService } from "../../shared/services/feature-nav.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.page.html",
  styleUrls: ["./account.page.scss"],
  standalone: false
})
export class AccountPage implements OnInit {
  private transactionsNav: FeatureNavItem[] = [
    { label: 'History', link: '/accounts/account/history', icon: 'ArrowRightLeft' },
    { label: 'Manage', link: '/accounts/account/manage', icon: 'Clock' },
    { label: 'Details', link: '/accounts/account/details', icon: 'Clock' }
  ]

  constructor(private featureNavService: FeatureNavService){}

  ngOnInit(): void {
    this.featureNavService.setItems(this.transactionsNav);
  }
}
