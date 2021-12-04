import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAllStockInfo } from 'src/app/shared/interfaces/IAllStockInfo';
import { StockMarketService } from 'src/app/shared/services/stock-market/stock-market.service';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockItemComponent implements OnInit, OnDestroy {

  @Input('stockSymbol') stockSymbol: string = '';

  stockInformation!: Partial<IAllStockInfo> | null;
  errorText: string = '';

  loadingData: boolean = false;

  subscription: Subscription = new Subscription();

  constructor(private stockMarketService: StockMarketService, private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    const stockInfoSub = this.stockMarketService.stockInfo$.subscribe(stock => {
      if (!!stock.globalQuote && stock.globalQuote.hasOwnProperty('symbol') && stock.globalQuote.symbol) {
        this.stockInformation = stock;
        this.cdr.markForCheck();
      }
    });

    if (!this.stockInformation) {
      this.getStockInformation();
    }

    this.subscription.add(stockInfoSub);
  }

  getStockInformation() {
    this.loadingData = true;
    this.stockInformation = null;
    this.errorText = '';

    const getStockSub = this.stockMarketService.getAllStockInfo(this.stockSymbol).subscribe(
      (response: IAllStockInfo | null) => {
        this.loadingData = false;

        if (!response) {
          return;
        }

        console.log(response);
        this.stockInformation = response;
      },
      (error: HttpErrorResponse) => {
        this.loadingData = false;
        this.errorText = `Could not fetch data for ${this.stockSymbol.toUpperCase()}`;
        console.log('error occurred');
      });

    this.subscription.add(getStockSub);
  }

  ngOnDestroy() {
    if (!!this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
