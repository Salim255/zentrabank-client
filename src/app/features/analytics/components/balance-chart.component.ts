import { Component, OnDestroy, OnInit, signal } from "@angular/core";
import { Subscription } from "rxjs";

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis
} from "ng-apexcharts";

import { HistoryService } from "../../transactions/pages/transactions-history/services/history.service";
import { TransactionDto } from "../../transactions/pages/transactions-history/dto/transaction.dto";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  fill: ApexFill;
  tooltip: ApexTooltip;
  yaxis: ApexYAxis;
};

@Component({
  selector: "app-balance-chart",
  templateUrl: "./balance-chart.component.html",
  styleUrls: ["./balance-chart.component.scss"],
  standalone: false
})
export class BalanceChartComponent implements OnInit, OnDestroy {

  transactions = signal<TransactionDto[]>([]);

  transactionsSubscription!: Subscription;

  chartOptions: Partial<ChartOptions>;

  constructor(
    private historyService: HistoryService
  ) {

    this.chartOptions = {

      series: [
        {
          name: "Balance",
          data: []
        }
      ],

      chart: {
        type: "line",
        height: 350,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },

      stroke: {
        curve: "smooth",
        width: 3,
        colors: ["#1485c6"]
      },

      xaxis: {
        type: "datetime"
      },

      yaxis: {
        labels: {
          formatter: value => `£${value.toLocaleString()}`
        }
      },

      grid: {
        borderColor: "#f0e6e2",
        strokeDashArray: 4
      },

      tooltip: {
        theme: "light",
        y: {
          formatter: value => `£${value.toLocaleString()}`
        }
      }

    };

  }

  ngOnInit(): void {

    this.subscribeToTransactions();

  }

  private subscribeToTransactions(): void {

    this.transactionsSubscription =
      this.historyService.getTransactions$
        .subscribe(transactions => {

          this.transactions.set(transactions);
          if(transactions.length) this.updateChart();

        });

  }

  private updateChart(): void {

    const balanceHistory = [...this.transactions()]

      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() -
          new Date(b.createdAt).getTime()
      )

      .map(transaction => ({

        x: new Date(transaction.createdAt).getTime(),

        y: transaction.postTransactionBalance

      }));


    this.chartOptions = {

      ...this.chartOptions,

      series: [
        {
          name: "Balance",
          data: balanceHistory
        }
      ]

    };

  }

  ngOnDestroy(): void {

    this.transactionsSubscription?.unsubscribe();

  }

}
