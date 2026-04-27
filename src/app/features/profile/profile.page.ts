import { Component } from "@angular/core";
import { AccountRoutingModule } from "../account/account-routing.module";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrl: "./profile.page.scss",
  imports: [AccountRoutingModule]
})
export class ProfilePage{}
