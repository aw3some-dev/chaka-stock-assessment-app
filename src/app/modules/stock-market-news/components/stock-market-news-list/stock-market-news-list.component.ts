import { Component, OnInit } from '@angular/core';

import marketNews from '../../../../shared/data/stock-news.json';
import { IStockMarketNews } from 'src/app/shared/interfaces/IStockMarketNews';


@Component({
  selector: 'app-stock-market-news-list',
  templateUrl: './stock-market-news-list.component.html',
  styleUrls: ['./stock-market-news-list.component.css']
})
export class StockMarketNewsListComponent implements OnInit {

  stockMarketNews: IStockMarketNews[] = <IStockMarketNews[]>marketNews;

  constructor() { }

  ngOnInit(): void {
    this.stockMarketNews = this.stockMarketNews.map(element => {
      return {
        ...element,
        date: new Date(element.date)
      }
    });
  }

}
