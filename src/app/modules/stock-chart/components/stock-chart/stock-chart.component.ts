import { DecimalPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { IAllStockInfo } from 'src/app/shared/interfaces/IAllStockInfo';
import { IOtherStockInfo } from 'src/app/shared/interfaces/IOtherStockInfo';
import { AmountSummaryPipe } from 'src/app/shared/pipes/amount-summary/amount-summary.pipe';
import { StockMarketService } from 'src/app/shared/services/stock-market/stock-market.service';
import { environment } from 'src/environments/environment';
import otherStockInfo from '../../../../shared/data/other-stocks.json';

@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class StockChartComponent implements OnInit {

  foundedDate: Date = new Date('1999-03-10');

  pillFilters: string[] = [
    'Most Active', 'Stock', 'US listed security'
  ];

  stockSymbol!: string;

  stockStatistics: { title: string, value: any }[] = <{ title: string, value: any }[]>[];

  isLoading: boolean = false;
  stockInformation!: Partial<IAllStockInfo> | null;
  errorText: string = '';

  otherStocks: IOtherStockInfo[] = <IOtherStockInfo[]>otherStockInfo;

  subscription: Subscription = new Subscription();


  constructor(
    private stockMarketService: StockMarketService,
    private amountSummaryPipe: AmountSummaryPipe,
    private decimalPipe: DecimalPipe,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['symbol']) {

        const stockInfoSub = this.stockMarketService.stockInfo$.subscribe(stock => {
          if (!!stock.globalQuote && stock.globalQuote.hasOwnProperty('symbol') && stock.globalQuote.symbol) {
            this.stockInformation = stock;
            this.extractStatistics();
            this.cdr.markForCheck();
          }
        });

        this.subscription.add(stockInfoSub);
      }

      if (!this.stockInformation) {
        this.getStockInformation(params['symbol']);
      }
    });
  }

  extractStatistics() {
    this.stockStatistics = [
      { title: 'Previous Close', value: this.decimalPipe.transform(this.stockInformation!.globalQuote!.previousClose, '1.2-2') },
      { title: 'Day Range', value: null },
      { title: 'Year Range', value: null },
      { title: 'Volume', value: this.amountSummaryPipe.transform(this.stockInformation!.globalQuote!.volume, 2) },
      { title: 'P/E Ratio', value: this.decimalPipe.transform(this.stockInformation!.stockOverview!.PERatio, '1.2-2') },
      { title: 'Dividend Yield', value: this.decimalPipe.transform(this.stockInformation!.stockOverview!.DividendYield, '1.2-2') },
      { title: 'Market Cap', value: this.amountSummaryPipe.transform(this.stockInformation!.stockOverview!.MarketCapitalization, 2) }
    ];
  }

  getStockInformation(stockSymbol: string) {
    this.isLoading = true;
    this.stockInformation = null;
    this.errorText = '';

    this.stockMarketService.getAllStockInfo(stockSymbol).subscribe(
      (response: IAllStockInfo | null) => {
        this.isLoading = false;

        if (!response) {
          this.errorText = `Could not fetch data for ${stockSymbol.toUpperCase()}`;
          return;
        }

        this.stockInformation = response;

        this.extractStatistics();
      },
      (error: HttpErrorResponse) => {
        this.isLoading = false;
        this.errorText = `Could not fetch data for ${this.stockSymbol.toUpperCase()}`;
        console.log('error occurred');
      });
  }

  openShareWindow() {
    if (navigator && navigator.share) {
      navigator.share({
        url: environment.WEB_URL,
        title: this.stockInformation!.stockOverview!.Symbol,
        text: this.stockInformation!.stockOverview!.Name
      });
    }
    console.log(this.route.snapshot.url)
  }
}
