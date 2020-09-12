import { Directive, ElementRef, OnChanges, SimpleChanges, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[checkValidity]'
})
export class CheckErrorDirective implements OnChanges {
  @Input() public isValid: boolean = true;
  private readonly spanErrorEle: HTMLSpanElement;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.isValid.previousValue !== undefined) {
      changes.isValid.currentValue ? this.renderer.removeClass(this.el.nativeElement, 'invalid') : this.renderer.addClass(this.el.nativeElement, 'invalid')
    }
  }
}
