import { Component, ElementRef, ViewChild } from "@angular/core";
import { balanceData } from "../data/data";

@Component({
  selector: "app-balance-chart",
  templateUrl: "./balance-chart.component.html",
  styleUrls: ["./balance-chart.component.scss"],
  standalone: false
})
export class BalanceChartComponent{
  @ViewChild('chart') chart!: ElementRef<HTMLCanvasElement>;
  scaleValues: string [] = [];
   ngOnInit() {
    this.generateScale();
  }

  ngAfterViewInit() {
    this.drawChart();
  }

  generateScale() {
    const max = Math.max(...balanceData.map(d => d.balance));
    const steps = 5;

    // IMPORTANT: type the array here too
    this.scaleValues = [];

    for (let i = 0; i <= steps; i++) {
      const value = (max / steps) * i;
      this.scaleValues.unshift(value.toFixed(0)); // now valid
    }
  }

  drawChart() {
    const canvas = this.chart.nativeElement;
    const ctx = canvas.getContext('2d')!;

    const width = canvas.width;
    const height = canvas.height;

    const max = Math.max(...balanceData.map(d => d.balance));
    const min = Math.min(...balanceData.map(d => d.balance));

    const stepX = width / (balanceData.length - 1);

    // -----------------------------
    // GRID LINES
    // -----------------------------
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(0,0,0,0.12)';

    this.scaleValues.forEach((_, i) => {
      const y = (height / (this.scaleValues.length - 1)) * i;

      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    });

    // -----------------------------
    // GRADIENT LINE
    // -----------------------------
    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, '#ff005d');
    gradient.addColorStop(1, '#005dff');

    ctx.lineWidth = 3;
    ctx.strokeStyle = gradient;
    ctx.beginPath();

    // -----------------------------
    // SMOOTH CURVE
    // -----------------------------
    balanceData.forEach((point, index) => {
      const x = index * stepX;
      const y =
        height -
        ((point.balance - min) / (max - min)) * height;

      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        const prevX = (index - 1) * stepX;
        const prevY =
          height -
          ((balanceData[index - 1].balance - min) /
            (max - min)) *
            height;

        const midX = (prevX + x) / 2;
        const midY = (prevY + y) / 2;

        ctx.quadraticCurveTo(prevX, prevY, midX, midY);
      }
    });

    ctx.stroke();

    // -----------------------------
    // FILL UNDER THE LINE
    // -----------------------------
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();

    ctx.fillStyle = 'rgba(0, 93, 255, 0.08)';
    ctx.fill();
  }
}
