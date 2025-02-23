import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  @HostBinding('class.highlight') isHighlight = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.isHighlight = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHighlight = false;
  }
}
