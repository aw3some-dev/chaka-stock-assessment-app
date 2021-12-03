import { Component, Input, OnInit } from '@angular/core';
import { ISector } from 'src/app/shared/interfaces/ISector';

import { getBackgroundImageStyle } from 'src/app/shared/utilities/utils';

@Component({
  selector: 'app-sector-highlight',
  templateUrl: './sector-highlight.component.html',
  styleUrls: ['./sector-highlight.component.css']
})
export class SectorHighlightComponent implements OnInit {

  @Input() sectorHighlight: ISector = <ISector>{};

  getBackgroundImgStyle: Function = getBackgroundImageStyle;

  constructor() { }

  ngOnInit(): void {
  }

}
