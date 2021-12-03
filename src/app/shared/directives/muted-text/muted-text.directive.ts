import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appMutedText]'
})
export class MutedTextDirective {

  @HostBinding('style.color') fontColor = '#b4b4b4';
  @HostBinding('style.fontSize') fontSize: string = '0.85rem';

  constructor() { }

  ngOnInit(): void {
    
  }

}
