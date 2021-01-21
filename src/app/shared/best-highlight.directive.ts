import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBestHighlight]',
})
export class BestHighlightDirective {
  @HostBinding('style.color') color: string = '#eb4034';
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#76c4e8');
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.color = '#d976e8';
  }
}
