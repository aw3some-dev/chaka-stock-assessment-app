import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, combineLatest, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IGlobalQuote } from '../../interfaces/IGlobalQuote';
import { IStockOverview } from '../../interfaces/IStockOverview';
import { IAllStockInfo } from '../../interfaces/IAllStockInfo';
import { StateService } from '../state/state.service';

const initialState: IAllStockInfo = {
  globalQuote: {
    changePercent: 0,
    symbol: '',
    price: 0,
    latestTradingDay: new Date(),
    previousClose: 0,
    change: 0
  },
  stockOverview: {}
};

@Injectable({
  providedIn: 'root'
})
export class StockMarketService extends StateService<IAllStockInfo> {

  stockInfo$: Observable<IAllStockInfo> = this.select(state => state);

  selectedState$: Observable<IAllStockInfo> = this.select((state) => {
    return state;
  });

  addState(stock: IAllStockInfo) {
    this.setState({
      globalQuote: stock.globalQuote,
      stockOverview: stock.stockOverview
    });
  }

  // selectTodo(todo: Todo) {
  //   this.setState({ selectedTodoId: todo.id });
  // }

  API_URL = environment.API_ENDPOINT;
  API_KEY = environment.API_KEY;

  constructor(private http: HttpClient) { 
    super(initialState);
  }

  getGlobalQuote(stockSymbol: string) {
    const storageName = `GLOBAL_QUOTE_${stockSymbol}`;

    let params = new HttpParams();

    params = params.append('function', 'GLOBAL_QUOTE');
    params = params.append('symbol', stockSymbol);
    params = params.append('apikey', this.API_KEY);

    return this.http.get<Observable<IGlobalQuote> | null>(this.API_URL, { params })
      .pipe(map((stockData: any) => {

        //destructure stock data, key is a string
        const { ['Global Quote']: rawGlobalQuote } = stockData;

        const processedGlobalQuote: IGlobalQuote = this.extractGlobalQuote(rawGlobalQuote);

        return processedGlobalQuote;

      }))
  }

  private extractGlobalQuote(rawGlobalQuote: any): IGlobalQuote {
    // destructure globalQuote to get needed data
    let {
      ['01. symbol']: symbol,
      ['02. open']: open,
      ['03. high']: high,
      ['04. low']: low,
      ['05. price']: price,
      ['06. volume']: volume,
      ['07. latest trading day']: latestTradingDay,
      ['08. previous close']: previousClose,
      ['09. change']: change,
      ['10. change percent']: changePercent

    } = rawGlobalQuote;

    // slice out the ending symbol (i.e %) for change % if it's there
    const changePercentLastChar = changePercent.slice(changePercent.length - 1);

    if (changePercentLastChar === '%') {
      changePercent = changePercent.slice(0, -1);
    }

    const processedGlobalQuote: IGlobalQuote = {
      symbol,
      open,
      high,
      low,
      price,
      volume,
      latestTradingDay,
      previousClose,
      change,
      changePercent

    };

    return processedGlobalQuote;
  }

  getStockOverview(stockSymbol: string) {

    const storageName = `STOCK_OVERVIEW_${stockSymbol}`;

    let params = new HttpParams();

    params = params.append('function', 'OVERVIEW');
    params = params.append('symbol', stockSymbol);
    params = params.append('apikey', this.API_KEY);

    return this.http.get<Observable<IStockOverview>>(this.API_URL, { params })
      .pipe(map((stockOverview: any) => {

        const processStockOverview = stockOverview;

        return processStockOverview;
      }))
  }


  getAllStockInfo(stockSymbol: string): Observable<IAllStockInfo | null> {

    return combineLatest(
      this.getGlobalQuote(stockSymbol),
      this.getStockOverview(stockSymbol)
    ).pipe(map(([globalQuote, stockOverview]) => {

      try {
        const stockInfo: IAllStockInfo = {
          globalQuote,
          stockOverview
        }

        this.addState(stockInfo);
        return stockInfo;
      } catch (error) {
        return null;
      }
    }))
  }

  private handleHttpError(error: HttpErrorResponse): Observable<HttpErrorResponse> {
    return throwError(error);
  }
}