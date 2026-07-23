import { Component } from "@angular/core";
import { ShieldCheck } from "lucide-angular";

@Component({

    selector: "landing-trust-status-card",

    templateUrl: "./trust-status-card.component.html",

    styleUrls: ["./trust-status-card.component.scss"],

    standalone: false

})

export class TrustStatusCardComponent {
    readonly securityHeroIcon = ShieldCheck;
    readonly items = [

        {
            label: "Encryption",
            value: "AES-256"
        },

        {
            label: "Authentication",
            value: "Biometric"
        },

        {
            label: "Monitoring",
            value: "24 / 7"
        }

    ];

}
