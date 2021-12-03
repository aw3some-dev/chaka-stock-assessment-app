import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockMarketNewsRoutingModule } from './stock-market-news-routing.module';
import { StockMarketNewsListComponent } from './components/stock-market-news-list/stock-market-news-list.component';
import { StockMarketNewsViewComponent } from './components/stock-market-news-view/stock-market-news-view.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StockMarketNewsListComponent,
    StockMarketNewsViewComponent,
  ],
  imports: [
    CommonModule,
    StockMarketNewsRoutingModule,
    SharedModule
  ]
})
export class StockMarketNewsModule { }
