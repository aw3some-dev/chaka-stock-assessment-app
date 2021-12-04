import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockChartRoutingModule } from './stock-chart-routing.module';
import { StockChartComponent } from './components/stock-chart/stock-chart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StockStatisticComponent } from './components/stock-statistic/stock-statistic.component';
import { OtherStockInfoComponent } from './components/other-stock-info/other-stock-info.component';
import { StockChartDetailsComponent } from './components/stock-chart-details/stock-chart-details.component';


@NgModule({
  declarations: [
    StockChartComponent,
    StockStatisticComponent,
    OtherStockInfoComponent,
    StockChartDetailsComponent
  ],
  imports: [
    CommonModule,
    StockChartRoutingModule,
    SharedModule
  ]
})
export class StockChartModule { }
