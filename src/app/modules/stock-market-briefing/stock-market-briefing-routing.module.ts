import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockMarketBriefingComponent } from './components/stock-market-briefing/stock-market-briefing.component';

const routes: Routes = [
  { path: '', component: StockMarketBriefingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockMarketBriefingRoutingModule { }
