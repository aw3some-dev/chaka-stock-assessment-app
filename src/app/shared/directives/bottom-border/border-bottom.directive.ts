import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBorderBottom]'
})
export class BorderBottomDirective {

  @HostBinding('style.borderBottomWidth') borderBottomWidth = '1px';
  @HostBinding('style.borderBottomColor') borderBottomColor = '#cccccc';

  constructor() { }

}
