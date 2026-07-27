import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

export interface FeatureNavItem {
  label: string;
  link: string;
  icon?: string; // optional Lucide icon
}

@Injectable({providedIn: "root"})
export class FeatureNavService {
  // Internal subject
  private readonly _navItems = new BehaviorSubject<FeatureNavItem[]>([]);

  // Public observable
  readonly getNavItems$: Observable<FeatureNavItem[]> = this._navItems.asObservable();

  // Setter
  setItems(items: FeatureNavItem[]): void {
    this._navItems.next(items);
  }

  // Clear
  clear(): void {
    this._navItems.next([]);
  }
}
