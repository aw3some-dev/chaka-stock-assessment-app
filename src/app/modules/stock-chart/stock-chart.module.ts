import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockChartRoutingModule } from './stock-chart-routing.module';
import { StockChartComponent } from './components/stock-chart/stock-chart.component';


@NgModule({
  declarations: [
    StockChartComponent
  ],
  imports: [
    CommonModule,
    StockChartRoutingModule
  ]
})
export class StockChartModule { }
