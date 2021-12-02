import { Component, OnInit } from '@angular/core';

import { getBackgroundImageStyle } from "../../../../shared/utilities/utils";

@Component({
  selector: 'app-stock-market-news-view',
  templateUrl: './stock-market-news-view.component.html',
  styleUrls: ['./stock-market-news-view.component.css']
})
export class StockMarketNewsViewComponent implements OnInit {

  getBackgroundImgStyle: Function = getBackgroundImageStyle;

  constructor() { }

  ngOnInit(): void {
  }

}
