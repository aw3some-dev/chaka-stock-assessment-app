import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBorderBottom]'
})
export class BorderBottomDirective implements OnInit {

  // @Input() borderWidthInPx = 1;

  @HostBinding('style.borderBottomWidth') borderBottomWidth = '1px';
  @HostBinding('style.borderBottomColor') borderBottomColor = '#cccccc';

  constructor() { }

  ngOnInit() {
    // this.borderBottomWidth = `${this.borderWidthInPx}px`;
  }
}
