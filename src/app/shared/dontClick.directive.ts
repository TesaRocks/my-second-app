import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDontClick]',
})
export class DontClickDirective {
  @HostBinding('style.color') color: string = '#fcba03';
  @HostListener('mouseleave') mouseLeave(event: Event) {
    this.color = '#fc03be';
  }
}
