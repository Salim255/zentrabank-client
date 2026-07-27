import { Injectable } from "@angular/core";

export interface FeatureNavItem {
  label: string;
  link: string;
  icon?: string; // optional Lucide icon
}


@Injectable({providedIn: "root"})
export class FeatureNavService {}
