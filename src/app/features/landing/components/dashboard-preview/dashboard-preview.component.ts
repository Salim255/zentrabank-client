import { Component } from "@angular/core";

import {
    Wallet,
    UserRound,
    TrendingUp,
    ShieldCheck,
    ArrowRight
} from 'lucide-angular';

@Component({
  selector: "landing-dashboard-preview",
  templateUrl: "./dashboard-preview.component.html",
  styleUrls: ["./dashboard-preview.component.scss"],
  standalone: false
})

export class DashboardPreviewComponent {

   walletIcon = Wallet;


    userIcon = UserRound;


    trendIcon = TrendingUp;


    shieldIcon = ShieldCheck;


    arrowIcon = ArrowRight;
}
