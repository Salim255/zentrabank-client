import { Component, ElementRef, ViewChild } from "@angular/core";
import { balanceData } from "../data/data";
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  ChartComponent
} from "ng-apexcharts";


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
export class BalanceChartComponent{
 @ViewChild('chart') chart!: ChartComponent;

  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Balance',
          data: balanceData.map(d => ({ x: d.time, y: d.balance }))
        }
      ],
      chart: {
        //type: "donut",
        type: "line",
        height: 350,
        toolbar: { show: false },
        zoom: { enabled: false },
      },
      stroke: {
        curve: 'smooth',
        width: 3,
        colors: ["#1485c6"]
      },
      xaxis: {
        type: 'category',
        labels: { rotate: -45 }
      },
      yaxis: {
        labels: {
          formatter: val => `€${val}`
        }
      },
      grid: {
        borderColor: '#f0e6e2',
        strokeDashArray: 4
      },
      tooltip: {
        theme: 'light',
        y: {
          formatter: val => `€${val}`
        }
      }
    };
  }
}
