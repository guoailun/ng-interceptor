import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  // selector: '[appHighlight]' <p appHighlight>aaa</p>
  // selector: 'p' // <p>aaa</p> 
  // selector: 'p.appHighlight'  <p class="appHighlight">aaa</p> 
  // selector: '[title=Highlight]'  <p title="appHighlight">aaa</p> 
  // selector: ':not(span)' // 除了span之外的标签划过都是高亮

  selector: 'p, span'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    console.log(el)
    // el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
