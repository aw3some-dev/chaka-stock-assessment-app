import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-statistic',
  templateUrl: './stock-statistic.component.html',
  styleUrls: ['./stock-statistic.component.css']
})
export class StockStatisticComponent implements OnInit {

  @Input() statistic: { title: string, value: any } = <{ title: string, value: any }>{};

  constructor() { }

  ngOnInit(): void {
  }

}
