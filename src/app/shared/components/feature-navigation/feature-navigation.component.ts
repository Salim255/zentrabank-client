import { Component, OnDestroy, OnInit, signal } from "@angular/core";
import { FeatureNavItem, FeatureNavService } from "../../services/feature-nav.service";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-feature-nav",
  templateUrl: "./feature-navigation.component.html",
  styleUrls: ["./feature-navigation.component.scss"],
  standalone: false
})
export class FeatureNavigationComponent {
  items$: Observable< FeatureNavItem[]>;

  constructor(private featureNaveService: FeatureNavService){
      this.items$ = this.featureNaveService.getNavItems$;
  }
}
