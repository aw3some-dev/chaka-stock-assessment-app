import { IGlobalQuote } from "./IGlobalQuote";
import { IStockOverview } from "./IStockOverview";


export interface IAllStockInfo {
  globalQuote: IGlobalQuote,
  stockOverview: IStockOverview
}