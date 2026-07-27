import { Component, OnDestroy, OnInit, signal } from "@angular/core";
import { FeatureNavItem, FeatureNavService } from "../../services/feature-nav.service";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-feature-nav",
  templateUrl: "./feature-navigation.component.html",
  styleUrls: ["./feature-navigation.component.scss"],
  standalone: false
})
export class FeatureNavigationComponent implements OnInit, OnDestroy {
  //items$: Observable<FeatureNavItem[]>;
  items$ = signal<FeatureNavItem[]>([])
  private itemSubscription!: Subscription;
  constructor(private featureNaveService: FeatureNavService){

  }

  ngOnInit(): void {
      this.subscribeToItems();
  }


  private subscribeToItems(){
    this.itemSubscription = this.featureNaveService.getNavItems$.subscribe(items => {
      this.items$.set(items)
    })
  }

  ngOnDestroy(): void {
      this.itemSubscription?.unsubscribe();
  }
}
