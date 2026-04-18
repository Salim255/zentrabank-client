import { Component } from "@angular/core";
import { AccountRoutingModule } from "../accounts/pages/account/account-routing.module";

@Component({
  selector: "app-application",
  templateUrl: "./application.page.html",
  styleUrls: ["./application.page.scss"],
  standalone: true,
  imports: [AccountRoutingModule]
})
export class ApplicationPage {}
