import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IStockMarketNews } from 'src/app/shared/interfaces/IStockMarketNews';

import { getBackgroundImageStyle } from "../../../../shared/utilities/utils";

@Component({
  selector: 'app-stock-market-news-view',
  templateUrl: './stock-market-news-view.component.html',
  styleUrls: ['./stock-market-news-view.component.css']
})
export class StockMarketNewsViewComponent implements OnInit {

  @Input() newsItem: IStockMarketNews = <IStockMarketNews>{};

  getBackgroundImgStyle: Function = getBackgroundImageStyle;

  constructor() {

  }

  ngOnInit(): void {

  }

}
