import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { IAllStockInfo } from 'src/app/shared/interfaces/IAllStockInfo';
import { StockMarketService } from 'src/app/shared/services/stock-market/stock-market.service';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  
  @Input('stockSymbol') stockSymbol: string = '';

  stockInformation!: Partial<IAllStockInfo> | null;
  errorText: string = '';

  isLoading: boolean = false;

  changePercentValue: number = 0;

  constructor(private stockMarketService: StockMarketService) { }

  ngOnInit(): void {
    this.getStockInformation();
  }

  getStockInformation() {
    this.isLoading = true;
    this.stockInformation = null;
    this.errorText = '';

    this.stockMarketService.getAllStockInfo(this.stockSymbol)
      .subscribe((response: IAllStockInfo | null) => {
        this.isLoading = false;

        if(!response) {
          return;
        }

        this.stockInformation = response;
        this.changePercentValue = this.stockInformation.globalQuote!.changePercent;
      }, 
      (error: HttpErrorResponse) => {
        this.isLoading = false;
        this.errorText = `Could not fetch data for ${this.stockSymbol.toUpperCase()}`;
        console.log('error occurred');
      });
  }

}
