import { Component, Input } from "@angular/core";
import {
    ArrowDownLeft,
    ArrowUpRight,
    ArrowLeftRight,
    CheckCircle,
    LucideIconData
} from "lucide-angular";
import { retry } from "rxjs";


export type TransactionType =
    | "deposit"
    | "withdrawal"
    | "transfer";


export interface Transaction {

    id: string;

    type: TransactionType;

    title: string;

    description: string;

    amount: number;

    currency: string;

    reference: string;

    method: string;

    balanceAfter: number;

    createdAt: Date;

}



@Component({
    selector: "app-transaction-card",
    templateUrl: "./transaction-card.component.html",
    styleUrls: ["./transaction-card.component.scss"],
    standalone: false
})
export class TransactionCardComponent {


    @Input({ required: true })
    transaction!: any;


    checkCircle = CheckCircle;
    arrowLeftRight = ArrowLeftRight;

    get icon(): LucideIconData {


        switch(this.transaction.type) {


            case "deposit":

                return ArrowDownLeft;



            case "withdrawal":

                return ArrowUpRight;


            default:
              return ArrowLeftRight;

        }

    }



    get typeLabel(): string {


        switch(this.transaction.type) {


            case "deposit":

                return "Deposit";


            case "withdrawal":

                return "Withdrawal";


            case "transfer":

                return "Transfer";
            default:
              return "";


        }

    }



    get typeClass(): string {


        return `transaction-card--${this.transaction.type}`;

    }



    get amountClass(): string {


        return this.transaction.type === "deposit"

            ? "transaction-card__amount--positive"

            : "transaction-card__amount--negative";

    }



    get formattedDate(): string {


        return new Intl.DateTimeFormat(
            "en-GB",
            {
                dateStyle: "medium",
                timeStyle: "short"
            }
        )
        .format(this.transaction.createdAt);

    }

}
