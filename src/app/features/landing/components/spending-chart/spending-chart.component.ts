import { Component } from "@angular/core";

@Component({
  selector: "landing-spending-chart",
  templateUrl: "./spending-chart.component.html",
  styleUrls: ["./spending-chart.component.scss"],
  standalone: false
})

export class SpendingChartComponent {
    readonly spending = [

        {
            label: 'Mon',
            value: 35
        },

        {
            label: 'Tue',
            value: 55
        },

        {
            label: 'Wed',
            value: 42
        },

        {
            label: 'Thu',
            value: 75
        },

        {
            label: 'Fri',
            value: 60
        },

        {
            label: 'Sat',
            value: 90
        },

        {
            label: 'Sun',
            value: 48
        }

    ];



    readonly summary = {

        title: 'Monthly spending',

        amount: '€2,480',

        change: '+12%'

    };
}
