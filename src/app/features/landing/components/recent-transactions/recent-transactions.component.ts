import { Component } from '@angular/core';

import {
    ArrowDownLeft,
    ShoppingBag,
    ShoppingCart,
    Zap
} from 'lucide-angular';



import { LucideIconData } from 'lucide-angular';


interface Transaction {

    title: string;

    description: string;

    amount: string;

    type: 'income' | 'expense';

    icon: LucideIconData;

}



@Component({

    selector: 'landing-recent-transactions',

    templateUrl: './recent-transactions.component.html',

    styleUrls: ['./recent-transactions.component.scss'],

    standalone: false

})
export class RecentTransactionsComponent {


    readonly transactions: Transaction[] = [

        {
            title: 'Salary',
            description: 'Company payment',
            amount: '+€3,400',
            type: 'income',
            icon: ArrowDownLeft
        },


        {
            title: 'Apple Store',
            description: 'Card payment',
            amount: '-€24',
            type: 'expense',
            icon: ShoppingBag
        },


        {
            title: 'Amazon',
            description: 'Online purchase',
            amount: '-€189',
            type: 'expense',
            icon: ShoppingCart
        },


        {
            title: 'Electricity',
            description: 'Monthly bill',
            amount: '-€76',
            type: 'expense',
            icon: Zap
        }

    ];


}
