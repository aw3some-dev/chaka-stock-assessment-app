import { Component, OnInit } from '@angular/core';
import { ISector } from 'src/app/shared/interfaces/ISector';

import sectorHighlights from '../../../../shared/data/sector-highlights.json';
import sectorPerformances from '../../../../shared/data/sector-performance.json';

@Component({
  selector: 'app-stock-market-briefing',
  templateUrl: './stock-market-briefing.component.html',
  styleUrls: ['./stock-market-briefing.component.css']
})
export class StockMarketBriefingComponent implements OnInit {

  today = new Date();

  sectorHighlights: ISector[] = <ISector[]>sectorHighlights;

  sectorPerformances: ISector[] = <ISector[]>sectorPerformances;

  earnings: string[] = [
    'Symbol',
    'Company',
    'Fiscal Period',
    'Consensus Estimated EPS',
    'Actual EPS',
    'Suprise',
    'EPS, Year Ago',
    '% Change From Last Year'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
