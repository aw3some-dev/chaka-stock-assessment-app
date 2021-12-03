import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockMarketBriefingRoutingModule } from './stock-market-briefing-routing.module';
import { StockMarketBriefingComponent } from './components/stock-market-briefing/stock-market-briefing.component';


@NgModule({
  declarations: [
    StockMarketBriefingComponent
  ],
  imports: [
    CommonModule,
    StockMarketBriefingRoutingModule
  ]
})
export class StockMarketBriefingModule { }
