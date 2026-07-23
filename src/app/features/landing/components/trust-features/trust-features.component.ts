import { Component, Input } from "@angular/core";
import { LucideIconData } from "lucide-angular";

export interface TrustFeature {

    title: string;

    description: string;

    icon: LucideIconData;

}

@Component({

    selector: "landing-trust-features",

    templateUrl: "./trust-features.component.html",

    styleUrls: ["./trust-features.component.scss"],

    standalone: false

})

export class TrustFeaturesComponent {

    @Input()

    items: TrustFeature[] = [];

}
