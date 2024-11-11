import { AfterViewInit, Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appIncrementCount]'
})
export class IncrementCountDirective {
  @Input() appIncrementCount!: string;
  private duration: number = 3000;

  constructor(private el: ElementRef) { }
  get element() {
    return this.el.nativeElement
  }
  animateCount() {
    const start = 0;
    const end = Number(this.appIncrementCount);
    const increment = end / (this.duration / 100);
    let current = start;

    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(interval);
      }
      this.el.nativeElement.textContent = Math.floor(current);
    }, 100);
  }
}
