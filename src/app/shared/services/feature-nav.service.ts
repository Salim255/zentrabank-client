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
  private readonly _items$ = new BehaviorSubject<FeatureNavItem[]>([]);

  // Public observable
  readonly items$: Observable<FeatureNavItem[]> = this._items$.asObservable();

  // Setter
  setItems(items: FeatureNavItem[]): void {
    this._items$.next(items);
  }

  // Clear
  clear(): void {
    this._items$.next([]);
  }
}
