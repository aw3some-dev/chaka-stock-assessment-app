import { Component, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

import { IStockMarketNews } from 'src/app/shared/interfaces/IStockMarketNews';
import { getBackgroundImageStyle } from "../../../../shared/utilities/utils";

@Component({
  selector: 'app-stock-market-news-view',
  templateUrl: './stock-market-news-view.component.html',
  styleUrls: ['./stock-market-news-view.component.css'],
  animations: [trigger('itemState', [
    transition(':enter', [
      style({
        transform: 'translateX(-60px)',
        opacity: '.1'
      }),
      animate('200ms')
    ])
  ])]
})
export class StockMarketNewsViewComponent implements OnInit {

  @Input() newsItem: IStockMarketNews = <IStockMarketNews>{};

  getBackgroundImgStyle: Function = getBackgroundImageStyle;

  animationState = 'beginEntry';

  constructor() {

  }

  ngOnInit(): void {

  }

}
