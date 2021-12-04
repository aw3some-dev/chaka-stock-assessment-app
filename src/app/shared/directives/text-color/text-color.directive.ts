import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {

  @Input('appTextColor') percentValue: number = 0.0;

  @HostBinding('style.color') color = '#28a745';

  constructor() { }

  ngOnInit() {
    switch (Math.sign(this.percentValue)) {
      case 1:
        this.color = '#28a745';
        break;

      case -1:
        this.color = '#dc3545'
        break;

      default:
        this.color = '#6c757d';
        break;
    }
  }
}
