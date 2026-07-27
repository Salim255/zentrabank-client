import { Component, OnDestroy, OnInit } from "@angular/core";
import { FeatureNavItem, FeatureNavService } from "../../services/feature-nav.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-feature-nav",
  templateUrl: "./feature-navigation.component.html",
  styleUrls: ["./feature-navigation.component.scss"],
  standalone: false
})
export class FeatureNavigationComponent implements OnInit, OnDestroy {
  items: FeatureNavItem[] = [];

  private naveDataSubscription!: Subscription;

  constructor(private featureNaveService: FeatureNavService){}

  ngOnInit(): void {

  }



  private subscribeToNavData() {
    this.naveDataSubscription = this.featureNaveService.
  }
  ngOnDestroy(): void {
    this.naveDataSubscription?.unsubscribe();
  }
}
