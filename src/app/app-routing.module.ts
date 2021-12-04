import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'stock-market-briefing', pathMatch: 'full' },
  {
    path: 'stock-market-news', loadChildren: () => import('./modules/stock-market-news/stock-market-news.module')
      .then(m => m.StockMarketNewsModule)
  },
  {
    path: 'stock-market-briefing', loadChildren: () => import('./modules/stock-market-briefing/stock-market-briefing.module')
      .then(m => m.StockMarketBriefingModule)
  },
  {
    path: 'stock-market-briefing/:symbol', loadChildren: () => import('./modules/stock-chart/stock-chart.module')
      .then(m => m.StockChartModule)
  },
  { path: '**', redirectTo: 'stock-market-briefing', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    initialNavigation: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
