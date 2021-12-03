import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockMarketBriefingRoutingModule } from './stock-market-briefing-routing.module';
import { StockMarketBriefingComponent } from './components/stock-market-briefing/stock-market-briefing.component';
import { StockItemComponent } from './components/stock-item/stock-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SectorHighlightComponent } from './components/sector-highlight/sector-highlight.component';


@NgModule({
  declarations: [
    StockMarketBriefingComponent,
    StockItemComponent,
    SectorHighlightComponent
  ],
  imports: [
    CommonModule,
    StockMarketBriefingRoutingModule,
    SharedModule
  ]
})
export class StockMarketBriefingModule { }
