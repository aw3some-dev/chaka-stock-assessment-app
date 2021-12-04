import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBadgeColor]'
})
export class BadgeColorDirective {

  @Input('appBadgeColor') percentValue = 0.0;

  @HostBinding('style.backgroundColor') backgroundColor = '#28a745';

  constructor() { }

  ngOnInit() {
    switch (Math.sign(this.percentValue)) {
      case 1:
        this.backgroundColor = '#28a745';
        break;

      case -1:
        this.backgroundColor = '#dc3545'
        break;

      default:
        this.backgroundColor = '#6c757d';
        break;
    }
  }
}
