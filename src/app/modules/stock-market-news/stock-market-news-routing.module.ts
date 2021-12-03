import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockMarketNewsListComponent } from './components/stock-market-news-list/stock-market-news-list.component';
import { StockMarketNewsViewComponent } from './components/stock-market-news-view/stock-market-news-view.component';

const routes: Routes = [
  { path: '', component: StockMarketNewsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockMarketNewsRoutingModule { }
