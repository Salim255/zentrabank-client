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
  const canvas = this.chart.nativeElement as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;

  const width = canvas.width;
  const height = canvas.height;

  ctx.clearRect(0, 0, width, height);

  // === 1. GRID LINES ===
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1;

  const gridCount = 6;
  for (let i = 0; i < gridCount; i++) {
    const y = (height / (gridCount - 1)) * i;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  // === 2. PREPARE DATA ===
  const values = balanceData.map(d => d.balance); // e.g. [1200, 1400, 1600, 1550, 1800]
  const max = Math.max(...values);
  const min = Math.min(...values);

  const xStep = width / (values.length - 1);

  const scaleY = (val: number) =>
    height - ((val - min) / (max - min)) * height;

  // === 3. GRADIENT FILL ===
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, "rgba(37, 99, 235, 0.35)");
  gradient.addColorStop(1, "rgba(37, 99, 235, 0)");

  ctx.beginPath();
  ctx.moveTo(0, scaleY(values[0]));

  values.forEach((v, i) => {
    ctx.lineTo(i * xStep, scaleY(v));
  });

  ctx.lineTo(width, height);
  ctx.lineTo(0, height);
  ctx.closePath();

  ctx.fillStyle = gradient;
  ctx.fill();

  // === 4. SMOOTH LINE ===
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#2563eb";
  ctx.lineJoin = "round";
  ctx.lineCap = "round";

  ctx.moveTo(0, scaleY(values[0]));

  values.forEach((v, i) => {
    ctx.lineTo(i * xStep, scaleY(v));
  });

  ctx.stroke();
}
}
