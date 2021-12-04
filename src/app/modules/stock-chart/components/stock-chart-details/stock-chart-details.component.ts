import { Component, OnInit, OnDestroy } from '@angular/core';

import { graphic } from 'echarts';


@Component({
  selector: 'app-stock-chart-details',
  templateUrl: './stock-chart-details.component.html',
  styleUrls: ['./stock-chart-details.component.css']
})
export class StockChartDetailsComponent implements OnInit {

  base = +new Date(1968, 9, 3);
  oneDay = 24 * 3600 * 1000;
  date: any = [];

  data = [Math.random() * 300];

  option: any;


  constructor() {

  }

  ngOnInit() {

    for (let i = 1; i < 20000; i++) {
      var now = new Date((this.base += this.oneDay));
      this.date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
      this.data.push(Math.round((Math.random() - 0.5) * 20 + this.data[i - 1]));
    }

    this.option = {
      tooltip: {
        trigger: 'axis',
        position: function (pt: any) {
          return [pt[0], '10%'];
        }
      },
      title: {
        left: 'center',
        text: ''
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.date
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 10
        },
        {
          start: 0,
          end: 10
        }
      ],
      series: [
        {
          name: 'Fake Data',
          type: 'line',
          symbol: 'none',
          sampling: 'lttb',
          itemStyle: {
            color: 'rgb(255, 70, 131)'
          },
          areaStyle: {
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#dc3545'
              },
              {
                offset: 0.5,
                color: 'rgb(255, 255, 255)'
              },
              {
                offset: 1,
                color: 'rgb(255, 255, 255)'
              }
            ])
          },
          data: this.data
        }
      ]
    };
  }
}
