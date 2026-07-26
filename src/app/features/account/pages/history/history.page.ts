import { Component, signal } from "@angular/core";
import { ArrowDownLeft, ArrowRightLeft, ArrowUpRight, Car, Music4, ShoppingBag } from "lucide-angular";

@Component({
  selector: "app-history-page",
  templateUrl: "./history.page.html",
  styleUrls: ["./history.page.scss"],
  standalone: false
})
export class HistoryPage {
  shoppingBag = ShoppingBag;
  arrowDownLeft = ArrowDownLeft;
  arrowUpRight = ArrowUpRight;
  arrowRightLeft = ArrowRightLeft;
  car = Car;
  music4 = Music4;


    transactions = signal([


        {
            id: "1",

            type: "deposit",

            title: "Salary Payment",

            description:
                "Monthly salary received from employer.",

            amount: 2850,

            currency: "GBP",

            reference:
                "TRX-93848320",

            method:
                "Bank Transfer",

            balanceAfter:
                8394.52,

            createdAt:
                new Date()

        },



        {
            id: "2",

            type: "withdrawal",

            title: "Cash Withdrawal",

            description:
                "ATM cash withdrawal.",

            amount: 120,

            currency: "GBP",

            reference:
                "TRX-48392011",

            method:
                "ATM",

            balanceAfter:
                8274.52,

            createdAt:
                new Date()

        },



        {
            id: "3",

            type: "transfer",

            title: "Bank Transfer",

            description:
                "Transfer to another account.",

            amount: 450,

            currency: "GBP",

            reference:
                "TRX-19283744",

            method:
                "Online Transfer",

            balanceAfter:
                7824.52,

            createdAt:
                new Date()

        }


    ]);





    summary = {


        totalTransactions:
            284,


        moneyIn:
            12480,


        moneyOut:
            7920,


        currentBalance:
            18392,


        currency:
            "GBP"


    };


}
