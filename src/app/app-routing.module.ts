import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'stock-market-news', pathMatch: 'full' },
  {
    path: 'stock-market-news', loadChildren: () => import('./modules/stock-market-news/stock-market-news.module')
      .then(m => m.StockMarketNewsModule)
  },
  {
    path: 'stock-market-view', loadChildren: () => import('./modules/stock-market-view/stock-market-view.module')
      .then(m => m.StockMarketViewModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
