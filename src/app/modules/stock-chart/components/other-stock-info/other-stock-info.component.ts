import { Component, Input, OnInit } from '@angular/core';
import { IOtherStockInfo } from 'src/app/shared/interfaces/IOtherStockInfo';

@Component({
  selector: 'app-other-stock-info',
  templateUrl: './other-stock-info.component.html',
  styleUrls: ['./other-stock-info.component.css']
})
export class OtherStockInfoComponent implements OnInit {

  @Input() stock: IOtherStockInfo = <IOtherStockInfo>{};

  constructor() { }

  ngOnInit(): void {
  }

}
