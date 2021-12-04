import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAllStockInfo } from 'src/app/shared/interfaces/IAllStockInfo';
import { StockMarketService } from 'src/app/shared/services/stock-market/stock-market.service';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit, OnDestroy {

  @Input('stockSymbol') stockSymbol: string = '';

  stockInformation!: Partial<IAllStockInfo> | null;
  errorText: string = '';

  loadingData: boolean = false;

  subscription: Subscription = new Subscription();

  constructor(private stockMarketService: StockMarketService) {

  }

  // constructor(
  //   private todosState: TodosStateService,
  //   private cdr: ChangeDetectorRef
  // ) {
  //   this.todosState.todos$.subscribe(todos => {
  //     this.todos = todos;
  //     this.cdr.markForCheck(); // Fix View not updating
  //   });
  // }

  ngOnInit(): void {
    const stockInfoSub = this.stockMarketService.stockInfo$.subscribe(stock => {
      console.log(stock);
      if (!!stock) {
        this.stockInformation = stock;
      } else {
        this.getStockInformation();
      }
    });

    this.subscription.add(stockInfoSub);

  }

  getStockInformation() {
    this.loadingData = true;
    this.stockInformation = null;
    this.errorText = '';

    const getStockSub = this.stockMarketService.getAllStockInfo(this.stockSymbol)
      .subscribe((response: IAllStockInfo | null) => {
        this.loadingData = false;

        if (!response) {
          return;
        }

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
