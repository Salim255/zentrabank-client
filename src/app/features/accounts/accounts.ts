import { Component } from "@angular/core";
import { AccountService } from "./services/account.service";
import { Subscription } from "rxjs";
import { AccountDto } from "./model/account.model";

@Component({
    selector: "app-accounts",
    templateUrl: "./accounts.html",
    styleUrls: ["./accounts.scss"],
    standalone: false
})
export class Accounts {

}
